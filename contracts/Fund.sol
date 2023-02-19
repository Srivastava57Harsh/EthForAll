//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.14;

import {ISuperfluid, ISuperToken, ISuperApp} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

error Unauthorized();

contract Fund {

    address public owner;
    uint256 public proj_id;
    using SuperTokenV1Library for ISuperToken;

    ISuperToken public fundtoken;

    // fDAIx:0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00
    // fDAI :0x88271d333C72e51516B67f5567c728E702b3eeE8


    struct Project{
        uint proj_id;
        string proj_name;
        string proj_desc;
        address developer;
        uint256 goalAmount;
        uint256 time;
    }

    mapping(uint => Project) public projects;
    mapping(address => bool) public accountList;

    constructor(ISuperToken _fundtoken,address _owner) {
        owner = _owner;
        fundtoken = _fundtoken;
    }

   

    function createFlowFromContract(address receiver,int96 flowRate) public {
        
        fundtoken.createFlow(receiver, flowRate);
    }

    function updateFlowFromContract(address receiver,int96 flowRate) internal {
        
        fundtoken.updateFlow(receiver, flowRate);
    }

    function deleteFlowFromContract(address receiver) external {
        
        fundtoken.deleteFlow(address(this), receiver);
    }

    function add(uint256 _proj_id) public view returns (address) {
        return projects[_proj_id].developer;
    } 

    function receiveProjectid() external view returns(uint) {
        return proj_id;
    }

    function projectregister(string memory _projname, string memory _projdesc,uint256 _goalAmount, uint256 _time) external{
        projects[proj_id] = Project(proj_id,_projname,_projdesc,msg.sender,_goalAmount,_time);
        ++proj_id;
    }

    function projectlist(uint _proj_id) public view returns (Project memory)
    {
        return projects[_proj_id];
    }

    function pvtprojectlist() public view returns (Project[] memory)
    {
        Project[] memory id = new Project[](proj_id);
        for(uint256 i=0; i < proj_id; i++)
        {
            if(projects[i].developer == msg.sender)
            {
                Project storage project = projects[i];
                id[i] = project;
            }
        }
        return id;
    }

    function ratevalue(uint256 _proj_id) public view returns (uint256) {
        uint256 time_in_seconds = ((projects[_proj_id].time)*30*24*3600);
        uint256 rate = uint256((projects[_proj_id].goalAmount) / time_in_seconds);  
        return rate;
    } 

    function funding(uint256 _proj_id) external {
        require (projects[_proj_id].goalAmount > 0, "Amount must be greater than 0");
        uint256 time_in_seconds = ((projects[_proj_id].time)*30*24*3600);
        int256 rate = int256((projects[_proj_id].goalAmount) / time_in_seconds);  
        int96 flowrate = int96(rate);
        createFlowFromContract(projects[_proj_id].developer,flowrate);
    }
}