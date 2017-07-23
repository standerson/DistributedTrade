/**
 * Agreements API
 */
let _        = require('lodash'),
    express  = require('express');

let config = require("../../config");

let router = express.Router();

router.get('/', async (req, res) => {
});

router.post('/', async (req, res) => {
    let asset = await config.contracts.Asset.new("ebbdf163", "Oxycodone", 123, 89500, 0x0, 0x0);
    res.json({asset: asset.address});
});

module.exports = router;
