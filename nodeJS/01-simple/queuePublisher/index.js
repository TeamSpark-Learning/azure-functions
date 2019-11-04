module.exports = async function (context, req) {
    let count = parseInt(req.body);
    
    context.bindings.queueItems = [];
    for (let i = 0; i < count; i++) {
        context.bindings.queueItems.push(i);
        context.log(`published ${i} to the queue`);
    }
    
    context.res = {
        body: `added ${count} messages to the queue`
    };

    context.done();
};