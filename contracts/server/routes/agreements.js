/**
 * Agreements API
 */
let _       = require('lodash'),
    express = require('express');

let config = require("../../config");

let router = express.Router();

router.get('/', async (req, res) => {
    let telemetris     = await config.contracts.Telemetris.at(config.contracts.systemAddress);
    let agreementCount = await telemetris.agreementCount();
    let agreementAddresses = [];
    for(let i = 0; i < agreementCount; i++) {
        let agreement = await telemetris.agreementAt(i);
        agreementAddresses.push(agreement);
    }

    res.json(agreementAddresses);

});

module.exports = router;
