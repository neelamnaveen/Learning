const SHA256=require('crypto-js/sha256');
class Block{
    constructor(index, timestamp, data, previousHash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
    }


    calculateHash(){
        return SHA256(this.index+ this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain=[this.createGenesisBlock()];
    }
    createGenesisBlock(){
        return new Block(0, "10/08/2021", "Genesis block", "0");
    }
    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash;
        newBlock.hash= newBlock.calculateHash();  // altering of data will effect hash
        this.chain.push(newBlock); // Here the consenses will comes into picture
    }
    isChainValid(){
        for(let i=1; i<this.chain.length; i++){
            const currentBlock=this.chain[i];
            const previousBlock=this.chain[i-1];

            if(currentBlock.hash!==currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash!==previousBlock.hash){
                return false;
            }

            return true;
        }
    }
}

let wipCoin=new Blockchain();
wipCoin.addBlock(new Block(1, "11/08/2021", {Amount:50}));
wipCoin.addBlock(new Block(2, "12/08/2021", {Amount:20}));

//console.log(JSON.stringify(wipCoin, null, 4));

console.log('Is blockchain is valid ? '+wipCoin.isChainValid())

// Blockchian alering

// Tempering data
wipCoin.chain[1].data={Amount:300};

console.log('Is blockchain is valid (After alteration of data) ? '+wipCoin.isChainValid())

// Tempering hash of current block 
wipCoin.chain[1].hash=wipCoin.chain[1].calculateHash();

console.log('Is blockchain is valid (After alteration of hash) ? '+wipCoin.isChainValid())
