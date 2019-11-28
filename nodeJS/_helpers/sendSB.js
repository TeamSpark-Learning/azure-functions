const { ServiceBusClient } = require("@azure/service-bus");

// Define connection string and related Service Bus entity names here
const connectionString = "";
const queueName = "js-queue-items";
const numberOfMessages = 1000;

async function main() {
    const sbClient = ServiceBusClient.createFromConnectionString(connectionString);
    const queueClient = sbClient.createQueueClient(queueName);
    const sender = queueClient.createSender();

    try {
        var tasks = [];

        for (let i = 0; i < numberOfMessages; i++) {
            const message = {
                label: `test`,
                userProperties: {
                    myCustomPropertyName: `my custom property value ${i}`
                }
            };
            tasks.push(sender.send(message));
        }

        await Promise.all(tasks);
        await queueClient.close();
    } finally {
        await sbClient.close();
    }
}

main().catch((err) => {
    console.log("Error occurred: ", err);
});