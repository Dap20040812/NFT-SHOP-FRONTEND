import React from "react";
import { ethers } from "ethers";

import AuctionArtifact from "./artifacts/Auction.json";
import AuctionManagerArtifact from "./artifacts/AuctionManager.json";
import NFTArtifact from "./artifacts/NFT.json";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import NFTPubli from "./components/NFTPubli";
import Header from "./components/Header";
import MintNFT from "./components/MintNFT";


const NFT_ADDRESS = "0x471D0990a91257635610CB076EB95C2194868E60"; // NFT contract address
const AUCTIONMANAGER_ADDRESS = "0x22b1eD53f6B54927265Ef4c3243A8B429B1E323F"; // AuctionManager contract address
function App() {
  return(
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/nftpubli" element={<NFTPubli/>}/>
        </Routes>
        <Routes>
          <Route path="/mint" element={<MintNFT/>}/>
        </Routes>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>

    </div>  
  )
}
export default App;