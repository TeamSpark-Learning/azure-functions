/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 */

let doWork = async function(args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(args);
        }, 3000);
    });
}

module.exports = async function (context) {
    return await doWork(context.bindings.name);
};