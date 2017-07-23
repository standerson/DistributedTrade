pragma solidity ^0.4.11;

import "./Shipment.sol";
import "./Validator.sol";

contract Agreement {

    Shipment public shipment;
    Validator public validator;

    /**
     * Constructor
     */
    function Agreement(Shipment _shipment, Validator _validator) {
        shipment = _shipment;
        validator = _validator;
    }
}
