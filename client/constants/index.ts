export const CONTRACT_ADDRESS = '0xA4dfB39f189cA80571dE823BE77eBc76eBf4c752';

export const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'int96',
        name: 'flowRate',
        type: 'int96',
      },
    ],
    name: 'createFlowFromContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'deleteFlowFromContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proj_id',
        type: 'uint256',
      },
    ],
    name: 'funding',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_projname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_projdesc',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_goalAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_time',
        type: 'uint256',
      },
    ],
    name: 'projectregister',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ISuperToken',
        name: '_fundtoken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'accountList',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proj_id',
        type: 'uint256',
      },
    ],
    name: 'add',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fundtoken',
    outputs: [
      {
        internalType: 'contract ISuperToken',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proj_id',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proj_id',
        type: 'uint256',
      },
    ],
    name: 'projectlist',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'proj_id',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'proj_name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'proj_desc',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'developer',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'goalAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'time',
            type: 'uint256',
          },
        ],
        internalType: 'struct Fund.Project',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'projects',
    outputs: [
      {
        internalType: 'uint256',
        name: 'proj_id',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'proj_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'proj_desc',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'developer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'goalAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'time',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pvtprojectlist',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'proj_id',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'proj_name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'proj_desc',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'developer',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'goalAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'time',
            type: 'uint256',
          },
        ],
        internalType: 'struct Fund.Project[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proj_id',
        type: 'uint256',
      },
    ],
    name: 'ratevalue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'receiveProjectid',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
