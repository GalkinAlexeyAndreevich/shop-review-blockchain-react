const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_request",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "ChangeRoleOnRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "CommentRewiev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "DeleteShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_comment",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "rate",
				"type": "bool"
			}
		],
		"name": "LeaveLikeDislikeOnComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "rate",
				"type": "bool"
			}
		],
		"name": "LeaveLikeDislikeOnRewiev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "id_shop",
				"type": "int256"
			}
		],
		"name": "RequestRoleChange",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "RequestsChangeRole",
		"outputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "id_shop",
				"type": "int256"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "history",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "addHistory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "int256",
				"name": "id_shop",
				"type": "int256"
			}
		],
		"name": "changeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "shopAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "createNewShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stars",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "createRewiev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_comment",
				"type": "uint256"
			}
		],
		"name": "getCommentOnRewiev",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "comment",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "rate",
								"type": "bool"
							}
						],
						"internalType": "struct ShopRewiev.LikeDislike[]",
						"name": "LikeDislikes",
						"type": "tuple[]"
					}
				],
				"internalType": "struct ShopRewiev.RewievComment",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			}
		],
		"name": "getCommentsOnRewiev",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "comment",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "rate",
								"type": "bool"
							}
						],
						"internalType": "struct ShopRewiev.LikeDislike[]",
						"name": "LikeDislikes",
						"type": "tuple[]"
					}
				],
				"internalType": "struct ShopRewiev.RewievComment[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getHistory",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_comment",
				"type": "uint256"
			}
		],
		"name": "getLikeDislikeOnComment",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "rate",
						"type": "bool"
					}
				],
				"internalType": "struct ShopRewiev.LikeDislike[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			}
		],
		"name": "getLikeDislikeOnRewiev",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "rate",
						"type": "bool"
					}
				],
				"internalType": "struct ShopRewiev.LikeDislike[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					},
					{
						"internalType": "int256",
						"name": "id_shop",
						"type": "int256"
					},
					{
						"internalType": "bool",
						"name": "status",
						"type": "bool"
					}
				],
				"internalType": "struct ShopRewiev.RequestChangeRole[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			}
		],
		"name": "getRewiev",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "stars",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "comment",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "rate",
								"type": "bool"
							}
						],
						"internalType": "struct ShopRewiev.LikeDislike[]",
						"name": "LikeDislikes",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "comment",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "owner",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "rate",
										"type": "bool"
									}
								],
								"internalType": "struct ShopRewiev.LikeDislike[]",
								"name": "LikeDislikes",
								"type": "tuple[]"
							}
						],
						"internalType": "struct ShopRewiev.RewievComment[]",
						"name": "comments",
						"type": "tuple[]"
					}
				],
				"internalType": "struct ShopRewiev.Rewiev",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "getRewievsShop",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "stars",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "comment",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "rate",
								"type": "bool"
							}
						],
						"internalType": "struct ShopRewiev.LikeDislike[]",
						"name": "LikeDislikes",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "comment",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "owner",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "rate",
										"type": "bool"
									}
								],
								"internalType": "struct ShopRewiev.LikeDislike[]",
								"name": "LikeDislikes",
								"type": "tuple[]"
							}
						],
						"internalType": "struct ShopRewiev.RewievComment[]",
						"name": "comments",
						"type": "tuple[]"
					}
				],
				"internalType": "struct ShopRewiev.Rewiev[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getShops",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "shop_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "workers",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "stars",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "comment",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "owner",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "rate",
										"type": "bool"
									}
								],
								"internalType": "struct ShopRewiev.LikeDislike[]",
								"name": "LikeDislikes",
								"type": "tuple[]"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "owner",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "comment",
										"type": "string"
									},
									{
										"components": [
											{
												"internalType": "address",
												"name": "owner",
												"type": "address"
											},
											{
												"internalType": "bool",
												"name": "rate",
												"type": "bool"
											}
										],
										"internalType": "struct ShopRewiev.LikeDislike[]",
										"name": "LikeDislikes",
										"type": "tuple[]"
									}
								],
								"internalType": "struct ShopRewiev.RewievComment[]",
								"name": "comments",
								"type": "tuple[]"
							}
						],
						"internalType": "struct ShopRewiev.Rewiev[]",
						"name": "rewievs",
						"type": "tuple[]"
					},
					{
						"internalType": "bool",
						"name": "statusClose",
						"type": "bool"
					}
				],
				"internalType": "struct ShopRewiev.Shop[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "getWorkersShop",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isShop",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "new_password",
				"type": "bytes32"
			}
		],
		"name": "registration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shops",
		"outputs": [
			{
				"internalType": "address",
				"name": "shop_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "statusClose",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "pass",
				"type": "bytes32"
			}
		],
		"name": "signIn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "switchRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "currentRole",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "id_shop",
				"type": "int256"
			},
			{
				"internalType": "bool",
				"name": "statusChangeRole",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export default ABI;
