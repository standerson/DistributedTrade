pragma solidity ^0.4.11;


import "./util/Ownable.sol";
import "./protocol/Agreement.sol";


/**
 * Main contract.
 */
contract Telemetris is Ownable {

    Agreement[] public agreements;

    function Telemetris() {
    }

    function agreementCount() constant returns (uint) {
        return agreements.length;
    }

    function addAgreement(Agreement agreement) onlyOwner {
        agreements.push(agreement);
    }

    function agreementAt(uint i) constant returns (Agreement) {
        return agreements[i];
    }
}
