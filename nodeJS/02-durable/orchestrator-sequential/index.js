/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 */

const df = require("durable-functions");

module.exports = df.orchestrator(function * (context) {
    const outputs = [];

    // Replace "Hello" with the name of your Durable Activity Function.
    outputs.push(yield context.df.callActivity("activity", "Tokyo"));
    outputs.push(yield context.df.callActivity("activity", "Seattle"));
    outputs.push(yield context.df.callActivity("activity", "London"));

    // returns ["Hello Tokyo!", "Hello Seattle!", "Hello London!"]
    return outputs;
});