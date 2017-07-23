pragma solidity ^0.4.11;

import "../util/Ownable.sol";
import "./Asset.sol";

contract Shipment is Ownable {
    Asset[] assets;
    GeoLocation origin;
    GeoLocation destination;
    GeoLocation[] route;

    address public buyer;

    address public seller;

    struct GeoLocation {
        int lat;
        int long;
        uint timestamp;
    }

    /**
     * Shipment Contract between a single buyer and a single seller.
     */
    function Shipment(address _buyer, address _seller) {
        buyer = _buyer;
        seller = _seller;
    }

    function assetCount() constant returns (uint) {
        return assets.length;
    }

    function assetAt(uint i) constant returns (Asset) {
        return assets[i];
    }

    function addAsset(Asset asset) onlyOwner {
        assets.push(asset);
    }

    function setOrigin(int _lat, int _long) onlyOwner {
        origin = GeoLocation(_lat, _long, now);
    }

    function setDestination(int _lat, int _long) onlyOwner {
        destination = GeoLocation(_lat, _long, now);
    }

    function addLocation(int _lat, int _long) onlyOwner {
        route.push(GeoLocation(_lat, _long, now));
    }

}
