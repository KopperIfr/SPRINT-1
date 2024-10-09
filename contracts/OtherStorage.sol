// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./SimpleStorage.sol";

contract OtherStorage {

    SimpleStorage simpleStorage;

    constructor(address _storage) {
        simpleStorage = SimpleStorage(_storage);
    }

    function addFavNumb(uint256 _numb) public payable{
        simpleStorage.addFavNumb(_numb);
    }

    function getFavNumb() public view returns (uint256) {
        return simpleStorage.getFavNumb();
    }

    function retrieveAmount() public {
        simpleStorage.retrieveAmount();
    }
}