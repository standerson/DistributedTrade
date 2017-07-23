pragma solidity ^0.4.11;


contract Telemetry {

    event measurementAdded(int tempInCelsius, uint humidity, uint lumens);

    struct Measurement {
        int tempInCelsius;
        uint humidity;
        uint lumens;
        uint timestamp;
    }

    Measurement [] measurements;

    /**
     * Constructor
     */
    function Telemetry() {
    }

    /**
     * Capture current measurements.
     */
    function addMeasurements(int _tempInCelsius, uint _humidity, uint _lumens) {
        measurements.push(Measurement(_tempInCelsius, _humidity, _lumens, now));
        measurementAdded(_tempInCelsius, _humidity, _lumens);
    }

}
