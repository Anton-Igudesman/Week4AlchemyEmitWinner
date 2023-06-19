//SPDX-License-Identifier: Unlicensed

pragma solidity 0.8.4;

interface Contract {
        function attempt() external;
    }

contract emitWinner {
    

    function trigger(address winnerContractAddress) external {
        Contract(winnerContractAddress).attempt();
    }
}