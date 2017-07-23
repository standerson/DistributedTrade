# Telemetris Contracts

## Prerequisites
```
npm install -g truffle-expect truffle-config web3@0.19.0 ethereumjs-testrpc
```

## Install
```
git clone git@gitlab.com:devpost-2017/contracts.git
npm install
truffle compile
```

## Test
Run `testrpc` in one window and `truffle` in another window.
```
testrpc -u 0 -u 1 -u 2
truffle test
```

## Run API server
```
testrpc -u 0 -u 1 -u 2
npm start
```