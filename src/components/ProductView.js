import { Add, Remove } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import {selectPublis} from '../features/publi/publiSlice'

function ProductView() {

    const [buttonActive, setButtonActive] = useState(false)
    const publis = useSelector(selectPublis);




    const renderInfo = () => {

        return (
            <>
            <InfoDiv>
                <Title> Tony Hawk </Title>
                <Description> Un bello NFT </Description>
                <Owner>Owned by Owner</Owner>
            </InfoDiv>
            <PriceDiv>
                    <PriceText> Highest Bid: </PriceText>
                    <Price> 10000000  </Price>
                    <Logo src='/images/logo.png' />
                </PriceDiv><PriceDiv>
                    <PriceText> Direct Buy: </PriceText>
                    <Price> 1000  </Price>
                    <Logo src='/images/logo.png' />
                </PriceDiv><PriceDiv>
                    <PriceText> Starting Price: </PriceText>
                    <Price> 12345  </Price>
                    <Logo src='/images/logo.png' />
                </PriceDiv><PriceDiv>
                    <PriceText> End Time: </PriceText>
                    <Price> 777 minutes </Price>
            </PriceDiv>
            <AddContainer>
                <Button onClick={() => setButtonActive(true)}>Place Bid</Button>
            </AddContainer>
            </>
        )
    }

    const renderAuctionForm = () => {
        return (
            <>
                <Bidders>
                    <BidTitle>Bids</BidTitle>
                    <hr></hr>
                    <Bids>Bid Amount: 100000</Bids>
                    <hr></hr>
                </Bidders>
                
                <BidDiv>
                    <Label>Amount To Bid:</Label> <Input/>
                </BidDiv>
                <BidDiv>
                    <Button>Place Bid</Button>
                    <Button onClick={() => setButtonActive(false)}>Go Back</Button>
                </BidDiv>
            </>
        )
    }

  return (
    <Container>
        <Wrap>
            <ImgContainer>
                <Image src='/images/TonyHawk.png' />
            </ImgContainer>
            <InfoContainer>
                {!buttonActive ? (renderInfo()) : (renderAuctionForm())}
            </InfoContainer>
        </Wrap>
        <Footer />
    </Container>
  )
}

export default ProductView

const Container = styled.div `

`

const Wrap = styled.div `
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div `
    flex: 1;
`

const Image = styled.img `
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div `
    flex: 1;
    padding: 0 30px;
    margin-left: 20px;
    border: 1px solid #91919199;
    border-radius: 7%;
`

const Title = styled.h1 `
    font-weight: 200;
`

const Description = styled.p `
    margin: 20px 0;
` 

const Owner = styled.p `
    margin-top: 20px;
    font-size: 20px;
` 

const Price = styled.span `
    font-weight: 100;
    font-size: 28px;
`

const AddContainer = styled.div `
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.button `
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Button2 = styled.button `
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 30px;

    &:hover{
        background-color: #f8f4f4;
    }
`

const PriceDiv = styled.div `
    display: flex;
    align-items: center;
`

const Logo = styled.img `
    height: 8vh;
`

const InfoDiv = styled.div `
    
`

const PriceText = styled.p `
    font-size: 28px;
    font-weight: 200;
    margin-right: 10px;
`

const Input = styled.input `
    margin-top: 20px;
`

const Label = styled.span `
    font-size: 20px;
    margin-top: 20px;
`

const BidDiv = styled.div `
    display: flex;
    margin-top: 25px;
    margin-left: 10px;
    width: 20vw;
    justify-content: space-between;
    align-items: center;
`

const Bidders = styled.div `
    margin-top: 30px;
    margin-left: 10px;
`

const BidTitle = styled.div `
    font-size: 34px;
    font-weight: 500;
`

const Bids = styled.div `
    font-size: 20px;
    font-weight: 300;
    margin: 5px 0;
`