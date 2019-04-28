var request = [];
var tag = 1;
request["heartbeat"] = [
    "response",
    {
        command: "heartbeat",
        tag: tag.toString()
    }
]
request["justsaying"] = [
    "justsaying",
    {
        "subject": "version",
        "body": {
            "protocol_version": "1.0",
            "alt": "1",
            "library": "rust-sdag",
            "library_version": "rust-sdag-hub",
            "program": "rust-sdag-hub",
            "program_version": "1.0"
        }
    }
]
request["balance"] = [
    "request",
    {
        command: "get_balance",
        params: "5YJKYU5NFWEUJAO4M2WNR4O3W5Z62ZYO",
        tag: tag.toString()
    }
]
request["tps"] = [
    "request",
    {
        command: "get_current_tps",
        tag: tag.toString()
    }
]


function make_a_peer_id() {
    var text = tools.generateBig();
    var peer_id = "";
    for (let index = 0; index < 32; index++) {
        var i = parseInt(Math.random() * 26);
        var s = text[i];
        peer_id += s;
    }
    return peer_id;
}

request["peer_id"] = [
    "response",
    {
        "response": {
            "peer_id": make_a_peer_id(),
        },
        tag: "0"
    }
]