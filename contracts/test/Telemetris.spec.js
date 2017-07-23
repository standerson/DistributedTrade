/**
 * Asset tracking scenarios.
 */
let Telemetris   = artifacts.require("./Telemetris.sol");
let Agreement    = artifacts.require("./protocol/Agreement.sol");
let Asset        = artifacts.require("./protocol/Asset.sol");
let Requirements = artifacts.require("./protocol/Requirements.sol");
let Shipment     = artifacts.require("./protocol/Shipment.sol");
let Telemetry    = artifacts.require("./protocol/Telemetry.sol");
let Validator    = artifacts.require("./protocol/Validator.sol");

const BigNumber = require('bignumber.js');

contract('Telemetris agreements', function(accounts) {

    beforeEach(async () => {
        telemetris = await Telemetris.new();
    });

    it('should initialize Telemetris', async () => {
        assert.equal(await telemetris.agreementCount(), 0);
    });

    it('should create new assets', async () => {
        let telemetry1 = await Telemetry.new();
        let requirements1 = await Requirements.new();
        let asset1 = await Asset.new("244e19e4", "Roxanol", 200, 14500, telemetry1.address, requirements1.address);

        let telemetry2 = await Telemetry.new();
        let requirements2 = await Requirements.new();
        let asset2 = await Asset.new("ebbdf163", "Oxycodone", 123, 89500, telemetry2.address, requirements2.address);

        assert.equal(await asset1.name(), "Roxanol");
        assert.equal(await asset2.name(), "Oxycodone");
    });

    it('should create a new shipment', async () => {
        let telemetry1 = await Telemetry.new();
        let requirements1 = await Requirements.new();
        let asset1 = await Asset.new("244e19e4", "Roxanol", 200, 14500, telemetry1.address, requirements1.address);

        let telemetry2 = await Telemetry.new();
        let requirements2 = await Requirements.new();
        let asset2 = await Asset.new("ebbdf163", "Oxycodone", 123, 89500, telemetry2.address, requirements2.address);

        let buyer = accounts[1];
        let seller = accounts[2];
        let shipment = await Shipment.new(buyer, seller);
        await shipment.addAsset(asset1.address);
        await shipment.addAsset(asset2.address);

        // Chicago to New York
        await shipment.setOrigin(41.897930, -87.622893);
        await shipment.setDestination(40.712743, -74.013379);

        assert.equal(await shipment.assetCount(), 2);
        assert.equal(await Asset.at(await shipment.assetAt(0)).name(), "Roxanol");
        assert.equal(await Asset.at(await shipment.assetAt(1)).name(), "Oxycodone");
    });


    it('should create a new agreement', async () => {
        let telemetry1 = await Telemetry.new();
        let requirements1 = await Requirements.new();
        let asset1 = await Asset.new("244e19e4", "Roxanol", 200, 14500, telemetry1.address, requirements1.address);

        let telemetry2 = await Telemetry.new();
        let requirements2 = await Requirements.new();
        let asset2 = await Asset.new("ebbdf163", "Oxycodone", 123, 89500, telemetry2.address, requirements2.address);

        let buyer = accounts[1];
        let seller = accounts[2];
        let shipment = await Shipment.new(buyer, seller);
        await shipment.addAsset(asset1.address);
        await shipment.addAsset(asset2.address);

        // Chicago to New York
        await shipment.setOrigin(41.897930, -87.622893);
        await shipment.setDestination(40.712743, -74.013379);

        let validator = await Validator.new();
        let agreement = await Agreement.new(shipment.address, validator.address);

        await telemetris.addAgreement(agreement.address);

        assert.equal(await shipment.assetCount(), 2);
        assert.equal(await Asset.at(await shipment.assetAt(0)).name(), "Roxanol");
        assert.equal(await Asset.at(await shipment.assetAt(1)).name(), "Oxycodone");
        assert.equal(await telemetris.agreementCount(), 1);
    });
});