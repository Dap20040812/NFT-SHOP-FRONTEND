import React from 'react'
import styled from 'styled-components'
import { products } from '../data'
import Product from './Product'

function Products() {
  return (
    
    <Container>
        {products.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products

const Container = styled.div `
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #0A0B5CED;
`