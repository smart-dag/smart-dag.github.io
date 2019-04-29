var hub = "wss://explorer.sdag.io:20003";
var ws = new WebSocket(hub);
ws.onmessage = function (evt) {
    console.log(evt.data);
    var result = JSON.parse(evt.data);
    switch (result[0]) {
        case "justsaying":
            on_justsaying(result[1]);
            break;
        case "request":
            on_request(result[1]);
            break;
        case "response":
            on_response(result[1]);
            break;
        default:
            break;
    }
}
ws.onclose = function () {
    console.log("连接已关闭...正在重新链接");
    ws = new WebSocket(hub);
};
function on_justsaying(result) {
    console.log("on_justsaying", result);
}
function on_request(result) {
    console.log("on_request", result);
    switch (result.command) {
        case "subscribe":
            var request_peer_id = [
                "response",
                {
                    "response": {
                        "peer_id": "AJJ4KYJ5NTZVJXY3I4J7N6CZW6QR35WR",
                    },
                    tag: "0"
                }
            ]
            console.log("回复peer_id", request_peer_id);
            ws.send(JSON.stringify(request_peer_id));
            break;
        case "heartbeat":
            var request_heartbeat = [
                "response",
                {
                    command: "heartbeat",
                    tag: result.tag
                }
            ]
            console.log("发送心跳包", request_heartbeat);
            ws.send(JSON.stringify(request_heartbeat));
            var get_balance = [
                "request",
                {
                    command: "get_balance",
                    params: "5YJKYU5NFWEUJAO4M2WNR4O3W5Z62ZYO",
                    tag: "0"
                }
            ]
            ws.send(JSON.stringify(get_balance));
            break;
        default:
            break;
    }
}
function on_response(result) {
    console.log("on_response", result);
}