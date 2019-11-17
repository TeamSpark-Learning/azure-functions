const df = require("durable-functions");

module.exports = df.orchestrator(function * (context) {
    const outputs = [];

    outputs.push(yield context.df.callActivity("activity", "Tokyo"));
    outputs.push(yield context.df.callActivity("activity", "Seattle"));
    outputs.push(yield context.df.callActivity("activity", "London"));

    return outputs;
});