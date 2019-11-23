const df = require("durable-functions");
const moment = require('moment');

module.exports = df.orchestrator(function*(context) {
    const approvalRequest = context.df.getInput();

    yield context.df.callActivity("SendApprovalRequest", {
        manager: approvalRequest.manager,
        instanceId: context.df.instanceId
    });

    const expiration = moment.utc(context.df.currentUtcDateTime).add(90, 's');
    const timeoutTask = context.df.createTimer(expiration.toDate());

    let isApproved = false;
    const approveTask = context.df.waitForExternalEvent("Approved");
    const declineTask = context.df.waitForExternalEvent("Declined");

    const winner = yield context.df.Task.any([
        approveTask,
        declineTask,
        timeoutTask
    ]);

    if (winner === approveTask) {
        isApproved = true;
        yield context.df.callActivity("SendNotification", {
            manager: approvalRequest.manager,
            worker: approvalRequest.worker,
            status: "Approved"
        });
    }

    if (winner == declineTask) {
        yield context.df.callActivity("SendNotification", {
            manager: approvalRequest.manager,
            worker: approvalRequest.worker,
            status: "Declined"
        });
    }

    if (winner == timeoutTask) {
        yield context.df.callActivity("SendNotification", {
            manager: approvalRequest.manager,
            worker: approvalRequest.worker,
            status: "Timed out"
        });
    }

    if (!timeoutTask.isCompleted) {
        timeoutTask.cancel();
    }

    return isApproved;
});