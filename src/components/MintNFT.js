import React, { Component } from 'react'
import styled from 'styled-components'
import { ethers } from "ethers";
import NFTArtifact from "../artifacts/NFT.json";
import AuctionManagerArtifact from "../artifacts/AuctionManager.json";
const NFT_ADDRESS = "0x471D0990a91257635610CB076EB95C2194868E60"; // NFT contract address
const AUCTIONMANAGER_ADDRESS = "0x22b1eD53f6B54927265Ef4c3243A8B429B1E323F"; // AuctionManager contract address

class MintNFT extends Component{
    constructor(props) {
      super(props);
      this.state = {
        activeAuction: null,
        auctions: [],
        bidAmount: 0,
        newAuction: {
          // newAuction is a state variable for the form
          startPrice: null,
          endTime: null,
          tokenId: null,
          minIncrement: null,
          directBuyPrice: null,
        },
        myItems: [],
      };
      this.mint = this.mint.bind(this);

    }
    async init() {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' }) // Enable the Ethereum client
        this.provider = new ethers.providers.Web3Provider(window.ethereum); // A connection to the Ethereum network
        this.signer = this.provider.getSigner(); // Holds your private key and can sign things
        this.setState({ currentAddress: this.signer.getAddress() }); // Set the current address
        this._auctionManager = new ethers.Contract( // We will use this to interact with the AuctionManager
          AUCTIONMANAGER_ADDRESS,
          AuctionManagerArtifact.abi,
          this.signer
        );
  
        this._nft = new ethers.Contract( // We will use this to interact with the NFT contract
          NFT_ADDRESS,
          NFTArtifact.abi,
          this.signer
        );
      } else {
        alert("No wallet detected");
      }
    }
    componentDidMount() {
      this.init();
    }
    async mint() {  
  
      this._nft = new ethers.Contract( // We will use this to interact with the NFT contract
        NFT_ADDRESS,
        NFTArtifact.abi,
        this.signer
      );
      // hash is the hash of the transaction
      let { hash } = await this._nft.getItem({
        // Calling the getItem function of the contract
        value: ethers.utils.parseEther("0.5"), // 0.5 AVAX
      });
      console.log("Transaction sent! Hash:", hash);
      await this.provider.waitForTransaction(hash); // Wait till the transaction is mined
      console.log("Transaction mined!");
      alert(`Transaction sent! Hash: ${hash}`);
     
    } 
  
    render() {
      return (
        <Container>
          <Background>
          </Background>
          <Button type="button" onClick={() => this.mint()} class="btn btn-danger">Mint NFT </Button>
        </Container>
        ) 
    }

}

export default MintNFT

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    background-color: #1C1240ED;

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        filter: brightness(50%);
    }
`
const Button = styled.button`
   border: 1px solid #f9f9f9;
   padding: 2vh 4vw;
   margin: 1vw 1vh;
   border-radius: 4px;
   width: 20vw;
   height: 10vh;
   letter-spacing: 1.5px;
   text-transform: uppercase;
   background-color: #A8A8A8;
   transition: all 0.2s ease 0s;
   cursor: pointer;

   &:hover {
       background-color: #22B14CED;
       color: #000;
       border-color: transparent;
   }

`