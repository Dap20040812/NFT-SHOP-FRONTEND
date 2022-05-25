import React, { Component } from "react";
import { ethers } from "ethers";

import AuctionArtifact from "./artifacts/Auction.json";
import AuctionManagerArtifact from "./artifacts/AuctionManager.json";
import NFTArtifact from "./artifacts/NFT.json";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NFTPubli from "./components/NFTPubli";
import Header from "./components/Header";
import MintNFT from "./components/MintNFT";
import Announcement from "./components/Announcement";
import View from "./components/View";


const NFT_ADDRESS = "0x471D0990a91257635610CB076EB95C2194868E60"; // NFT contract address
const AUCTIONMANAGER_ADDRESS = "0x22b1eD53f6B54927265Ef4c3243A8B429B1E323F"; // AuctionManager contract address
class App extends Component {
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
  render = () => (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path="/nftpubli" component={NFTPubli}/>
          <Route path="/mint" component={MintNFT}/>
          <Route path="/view" component={View}/>
        </Switch>
      </BrowserRouter>
  );
}
export default App;
