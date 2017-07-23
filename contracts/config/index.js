let _        = require("lodash"),
    contract = require("truffle-contract"),
    nconf    = require("nconf"),
    path     = require("path"),
    Web3     = require("web3"),
    defaults = require("./defaults.json");

let configPath = path.join(__dirname, '../config');
nconf.env().argv();
nconf.file({file: path.join(configPath, (nconf.get('NODE_ENV') || "dev") + ".json")});
nconf.defaults(defaults);

let provider = new Web3.providers.HttpProvider(nconf.get("ethereum:provider"));
let web3     = new Web3(provider);

let properties       = ["contract_name", "abi", "unlinked_binary"];
let contractDefaults = {
    from: web3.eth.accounts[0],
    gas: 4712388,
    gasPrice: 100000000000
};

let Agreement = contract(_.pick(require("../build/contracts/Agreement.json"), properties));
Agreement.setProvider(provider);
Agreement.defaults(contractDefaults);

let Asset = contract(_.pick(require("../build/contracts/Asset.json"), properties));
Asset.setProvider(provider);
Asset.defaults(contractDefaults);

let Requirements = contract(_.pick(require("../build/contracts/Requirements.json"), properties));
Requirements.setProvider(provider);
Requirements.defaults(contractDefaults);

let Telemetry = contract(_.pick(require("../build/contracts/Telemetry.json"), properties));
Telemetry.setProvider(provider);
Telemetry.defaults(contractDefaults);

let Validator = contract(_.pick(require("../build/contracts/Validator.json"), properties));
Validator.setProvider(provider);
Validator.defaults(contractDefaults);

let Shipment = contract(_.pick(require("../build/contracts/Shipment.json"), properties));
Shipment.setProvider(provider);
Shipment.defaults(contractDefaults);

let Telemetris = contract(_.pick(require("../build/contracts/Telemetris.json"), properties));
Telemetris.setProvider(provider);
Telemetris.defaults(contractDefaults);


module.exports      = nconf;
module.exports.web3 = web3;

module.exports.contracts = {
    Agreement: Agreement,
    Asset: Asset,
    Requirements: Requirements,
    Telemetry: Telemetry,
    Validator: Validator,
    Shipment: Shipment,
    Telemetris: Telemetris
};
