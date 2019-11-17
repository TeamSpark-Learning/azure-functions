let doWork = async function(args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(args);
        }, 3 * 1000);
    });
}

module.exports = async function (context) {
    let result = await doWork(context.bindings.name);
    
    context.log("=================================>", result);
    return result;
};