import React from 'react'
import styled from 'styled-components'

function MintNFT() {
  return (
    <Container>
      <Background>
      </Background>
      <Button type="button" onClick={() => this.mint()} class="btn btn-danger">Mint NFT </Button>
    </Container>
  )
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