import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import {Link} from 'react-router-dom'


function Header() {

  return (
    <Container>
        <Wrap>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input />
                        <Search style={{color: 'gray', fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    NFT
                </Logo>
            </Center>
            <Right>
                <StyledLink to={`/`}><MenuItem> HOME </MenuItem></StyledLink>
                <StyledLink to={`/mint`}><MenuItem> MINT </MenuItem></StyledLink>
                <MenuItem> SIGN IN </MenuItem>
                <MenuItem> 
                    <Badge badgeContent={4} color='primary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrap>
    </Container>
  )
}

export default Header

const Container = styled.div `
    height: 60px;
    display: flex;
    align-items: center;
    color:  white;
    background-color: #0B033BED;
`

const Wrap = styled.div `
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

const Left = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
`

const Center = styled.div `
    flex: 1;
    text-align: center;
`

const Right = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Language = styled.span `
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div `
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input `
    border: none;
`

const Logo = styled.h1 `
    font-weight: bold;
`

const MenuItem = styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`