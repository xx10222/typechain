import * as CryptoJs from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // static이어야 밖에서도 사용 가능!
    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string =>
    CryptoJs.SHA256(index+previousHash+timestamp+data).toString();

    constructor(index: number, hash: string, previousHash: string, data:string, timestamp: number) {
        this.index=index;
        this.hash=hash;
        this.previousHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
    }
}
  
const genesisBlock:Block =new Block(0, "20202020202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

//blockchain.push("stuff") //error! - blockchain은 [Block]만 저장하는 배열인데, stuff는 아니니까 오류 발생!


console.log(blockchain);

export {};