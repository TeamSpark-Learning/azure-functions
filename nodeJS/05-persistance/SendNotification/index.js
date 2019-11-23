module.exports = async function (context) {
    const data = context.bindings.requestData;
    
    context.bindings.emailManager = {
        content: [{
            type: "text/plain",
            value: `You changed approval status to: ${data.status}`
        }]
    };

    context.bindings.emailWorker = {
        content: [{
            type: "text/plain",
            value: `The new approval status is: ${data.status}`
        }]
    };
};