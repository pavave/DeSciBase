## contracts/DeSciToken.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DeSciToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("DeSciBase", "DSB") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}
