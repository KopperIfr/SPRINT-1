//SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

contract SimpleStorage {
    uint256 public favNumb;

    function addFavNumb(uint256 _numb) public payable{
        require(msg.value > 0, "Not enough amount passed");
        favNumb = _numb;
    }

    function getFavNumb() public view returns (uint256) {
        return favNumb;
    }

    function retrieveAmount() public {
        uint256 balance = address(this).balance;
        require(balance > 0 , "Not enough balance in the contract");
        (bool success, ) = msg.sender.call{value: balance}("");
        require(success, "Transfer failed");
    }
}