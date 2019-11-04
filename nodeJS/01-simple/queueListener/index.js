let doWork = async function(args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(args);
        }, 3000);
    });
}

module.exports = async function (context, myQueueItem) {
    let result = await doWork(myQueueItem);

    context.log(`processed ${result} from queue`);

    context.done();
};