class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    
    constructor(index: number, hash: string, previousHash: string, data:string, timestamp: number) {
        this.index=index;
        this.hash=hash;
        this.previousHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
    }
}
  
const genesisBlock:Block =new Block(0, "20202020202", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

//blockchain.push("stuff") //error! - blockchain은 [Block]만 저장하는 배열인데, stuff는 아니니까 오류 발생!


console.log(blockchain);

export {};