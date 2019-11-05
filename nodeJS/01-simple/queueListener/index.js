const delay = 3 * 1000;

let doWorkWait = async function(args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(args);
        }, delay);
    });
}

let doWorkCPU = async function(args) {
    let threshold = new Date().getTime() + delay;
    let result = 0;
    while (new Date().getTime() <= threshold) {
        result += Math.random() * Math.random();
    }

    return args;
}

module.exports = async function (context, myQueueItem) {
    let result = await doWorkCPU(myQueueItem);

    context.log(`processed ${result} from queue`);

    context.done();
};