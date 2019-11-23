var requestPromise = require('request-promise');

module.exports = async function (context, req) {
    const host = "localhost";
    const port = 7071;

    const instanceId = req.params.instanceId;
    const eventName = req.params.eventName;

    var options = {
        method: 'POST',
        uri: `http://${host}:${port}/runtime/webhooks/durabletask/instances/${instanceId}/raiseEvent/${eventName}`,
        resolveWithFullResponse: true,
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = await requestPromise(options);

    context.bindings.res = {
        status: response.statusCode,
        body: response.body
    };
};