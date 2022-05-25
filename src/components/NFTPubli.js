import React, { Component } from 'react'
import styled from 'styled-components'
import { ethers } from "ethers";
import NFTArtifact from "../artifacts/NFT.json";
import { setPublis} from "../features/publi/publiSlice"
import AuctionManagerArtifact from "../artifacts/AuctionManager.json";
import Slider from './Slider';
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


const NFT_ADDRESS = "0x471D0990a91257635610CB076EB95C2194868E60"; // NFT contract address
const AUCTIONMANAGER_ADDRESS = "0x22b1eD53f6B54927265Ef4c3243A8B429B1E323F"; // AuctionManager contract address



class NFTPubli extends Component{

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

    this.renderAuctionElement = this.renderAuctionElement.bind(this);
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
      this.getAuctions();
    } else {
      alert("No wallet detected");
    }
  }
  componentDidMount() {
    this.init();
  }
  async getAuctions() {
    

    let auctionsAddresses = await this._auctionManager.getAuctions(); // get a list of auction addresses
    let auctions = await this._auctionManager.getAuctionInfo(auctionsAddresses); // I'll just pass all the addresses here, you can build a pagination system if you want
    console.log(auctions);
    let new_auctions = [];

    for (let i = 0; i < auctions.endTime.length; i++) {
      let endTime = auctions.endTime[i].toNumber();
      let tokenId = auctions.tokenIds[i].toNumber();
      let auctionState = auctions.auctionState[i].toNumber();

      let startPrice = ethers.utils.formatEther(auctions.startPrice[i]);
      let directBuyPrice = ethers.utils.formatEther(auctions.directBuy[i]);
      let highestBid = ethers.utils.formatEther(auctions.highestBid[i]);

      let owner = auctions.owner[i];

      let newAuction = {
        endTime: endTime,
        startPrice: startPrice,
        owner: owner,
        directBuyPrice: directBuyPrice,
        tokenId: tokenId,
        highestBid: highestBid,
        auctionState: auctionState,
        auctionAddress: auctionsAddresses[i],
      };
      new_auctions.push(newAuction);
    }

    this.setState({ auctions: new_auctions }); // Update the state
  }
  renderAuctionElement(auction) {
    let state = "";
    if (auction.auctionState === 0) {
      state = "Open";
    }
    if (auction.auctionState === 1) {
      state = "Cancelled";
    }
    if (auction.auctionState === 2) {
      state = "Ended";
    }
    if (auction.auctionState === 3) {
      state = "Direct Buy";
    }
    return (
        <Wrap key={uuidv4()}>
          <p>ID: {auction.tokenId}</p> {/* ID of the token */}
          <p>Highest Bid: {auction.highestBid || 0}</p>
          {/* Highest bid */}
          <p>Direct Buy: {auction.directBuyPrice}</p> {/* Direct buy price */}
          <p>Starting Price: {auction.startPrice}</p> {/* Starting price */}
          <p>Owner: {auction.owner}</p> {/* Owner of the token */}
          <p>
            End Time: {Math.round((auction.endTime * 1000 - Date.now()) / 1000 / 60)}{" "}
            {/* Time left in minutes */}
            minutes
          </p>
          <p>Auction State: {state}</p>
          <button class="btn-primary" onClick={() => this.setActiveAuction(auction)}>See More</button>
          <Info className='info'>
            <Title>{auction.tokenId}</Title>
            <StyledLink to={`view`}><Button onClick={() => setPublis(auction)}>SHOP NOW</Button></StyledLink>
          </Info>
        </Wrap>
    );
  }
  render() {
    return (
      <div>
        <Slider/>
        <Container>
          {this.state.activeAuction != null ? (
              this.renderActiveAuction()
            ) : (
              <Content>
                {this.state.auctions.map(this.renderAuctionElement)}
              </Content>
            )}
        </Container>
      </div>
      ) 
  }
}

export default NFTPubli

const Container = styled.div`
    
    background-color: #130C2B;
    padding: 20px calc(3.5vw + 5px);
    display: flex;
    justify-content: center;
    align-items: center;
     
`

const Content = styled.div`
    display: grid;
    grid-gap: 4vh;
    grid-template-columns: repeat(3, minmax(0,1fr));
    
`
const Wrap = styled.div`
    cursor: pointer;
    overflow: hidden;
    color: black;
    max-height: calc(100vw - 25vh);
    max-width: calc(100vh - 10vw);
    border: 3px solid black; 
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    background-color: #B5B5B5ED;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        height: 45vh;
        width: 20vw;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.02);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: #ffffffED;
        color: white;
        background-color: #000000ED;
        opacity: 1;
    }
    &:hover .info{
        box-shadow: rgb(0 0 0 / 10%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        opacity: 1;
    }
    &:hover .image{
        filter: brightness(50%);
        border-color: rgba(249, 249, 249 , 0.8);
    }
`
const Info = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    
    
`

const Title = styled.h1 `
    color: white;
    margin-bottom: 20px;
`

const Button = styled.button `
    border: none;
    padding: 10px;
    width: 10vw;
    background: white;
    color: black;
    cursor: pointer;
    font-weight: 600;

    &:hover{
      color: white;
      border: 2px solid black;
      background: blue;

    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        
    }
    &:hover{
        color: darkblue;
    }
`