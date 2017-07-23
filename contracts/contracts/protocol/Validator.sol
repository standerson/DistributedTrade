pragma solidity ^0.4.11;


import "./Validator.sol";
import "./Telemetry.sol";
import "./Requirements.sol";


contract Validator {

    function Validator() {
    }

    function validate(Telemetry _telemetry, Requirements _requirements) constant returns (bool) {
        // TODO: implement validation
        return true;
    }
}