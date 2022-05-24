import React from 'react'
import styled from 'styled-components'

function CategoryItem({item}) {
  return (
    <Container>
        <Image className='image' src={item.img} />
        <Info className='info'>
            <Title> {item.title} </Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem

const Container = styled.div `
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

    &:hover .info{
        box-shadow: rgb(0 0 0 / 10%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        opacity: 0.9;
    }
    &:hover .image{
        filter: brightness(50%);
        border-color: rgba(249, 249, 249 , 0.8);
    }
`

const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    background-color: white;
    width: 10vw;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`