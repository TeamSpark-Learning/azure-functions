module.exports = async function (context) {
    const host = "localhost";
    const port = 7071;

    const data = context.bindings.requestData;

    const approveUrl = `http://${host}:${port}/api/proxy/${data.instanceId}/Approved`;
    const declineUrl = `http://${host}:${port}/api/proxy/${data.instanceId}/Declined`;

    context.bindings.email = {
        content: [{
            type: "text/html",
            value: `
            <a href="${approveUrl}" target="_blank">Approve</a>
            or
            <a href="${declineUrl}" target="_blank">Decline</a>`
        }]
    };
};