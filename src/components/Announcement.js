import React from 'react'
import styled from 'styled-components'

function Announcement() {
  return (
    <Container>
        Deals!
    </Container>
  )
}

export default Announcement

const Container = styled.div `
    height: 30px;
    background-color: #17012EED;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`