import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <Left>
            <Logo> NFT </Logo>
            <Description> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <SocialContainer>
                <SocialIcon color='#3b5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='#e4405f'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='#55acee'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='#e60023'>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>
                <Room style={{marginRight:'10px'}} />
                Cra 2 Este #21A-56 Chía, Cundinamarca
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:'10px'}} />
                Telefono
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:'10px'}} />
                Correo
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer

const Container = styled.div `
    display: flex;
    background-color: #160036;
    color: white;
`

const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div `
    flex: 1;
    padding: 20px;
`

const Right = styled.div `
    flex: 1;
    padding: 20px;
`

const Logo = styled.h1 `

`

const Description = styled.p `
    margin: 20px 0;
`

const SocialContainer = styled.div `
    display: flex;
`

const SocialIcon = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Title = styled.h3 `
    margin-bottom: 30px;
`

const List = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li `
    width: 50%;
    margin-bottom: 10px;
`

const ContactItem = styled.div `
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`