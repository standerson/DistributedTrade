pragma solidity ^0.4.11;


contract Requirements {

    struct Temperature {
        uint decimals;
        int min;
        int max;
    }

    struct Humidity {
        uint decimals;
        int min;
        int max;
    }

    Temperature public temperature;
    Humidity public humidity;

    /**
     *
     */
    function Requirements() {
    }


}