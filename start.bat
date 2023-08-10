@REM @echo off
@REM cd ./mygeth/mygeth
@REM start geth --datadir ./ --networkid 15 --http --http.api "personal,web3,net,eth" --http.corsdomain "*" --allow-insecure-unlock
@REM start geth attach \\.\pipe\geth.ipc --exec miner.start()
@REM start geth attach \\.\pipe\geth.ipc
@REM cd ../../
@REM npm install
@REM npm start
@REM cd ./mygeth/mygeth

@REM start /ik geth attach \\.\pipe\geth.ipc --exec miner.start()
@REM start geth attach \\.\pipe\geth.ipc
@REM cd ../../
@REM @REM start /ik npm i
@REM start /ik npm start
@REM cmd /k geth --datadir ./mygeth/mygeth --networkid 15 --http --http.corsdomain "*" --allow-insecure-unlock --ws.api="db,eth,net,web3,personal,web3"


@REM cd ./mygeth/mygeth
start npm start
cd ./mygeth/mygeth
geth --datadir ./ init genesis.json
start  geth --datadir ./ --networkid 15 --http --http.corsdomain "*" --allow-insecure-unlock --http --http.api personal,eth,net,web3 --mine --miner.threads 3

start geth attach \\.\pipe\geth.ipc

