const df = require("durable-functions");

module.exports = df.orchestrator(function * (context) {
    let tasks = [
        context.df.callActivity("activity", "Tokyo"),
        context.df.callActivity("activity", "Seattle"),
        context.df.callActivity("activity", "London")
    ];

    yield context.df.Task.all(tasks);

    let outputs = tasks.map((task) => {
        return task.result;
    });

    return outputs;
});