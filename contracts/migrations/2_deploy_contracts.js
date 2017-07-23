let Telemetris = artifacts.require("./Telemetris.sol");

let Agreement = artifacts.require("./protocol/Agreement.sol");
let Asset = artifacts.require("./protocol/Asset.sol");
let Requirements = artifacts.require("./protocol/Requirements.sol");
let Shipment = artifacts.require("./protocol/Shipment.sol");
let Telemetry = artifacts.require("./protocol/Telemetry.sol");
let Validator = artifacts.require("./protocol/Validator.sol");

module.exports = function(deployer) {
    deployer.deploy(Telemetris);
    deployer.deploy(Agreement);
    deployer.deploy(Asset);
    deployer.deploy(Requirements);
    deployer.deploy(Shipment);
    deployer.deploy(Telemetry);
    deployer.deploy(Validator);
};

