pragma solidity ^0.4.11;

import "./Requirements.sol";
import "./Telemetry.sol";
import "./Validator.sol";


contract Asset {

    bytes32 public id;
    string public name;
    uint public weight;
    uint public price;

    Telemetry public telemetry;
    Requirements public requirements;

    function Asset(
        bytes32 _id,
        string _name,
        uint _weight,
        uint _price,
        Telemetry _telemetry,
        Requirements _requirements
    )
    {
        id = _id;
        name = _name;
        weight = _weight;
        price = _price;
        telemetry = _telemetry;
        requirements = _requirements;
    }
}
