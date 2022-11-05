import React from 'react'
import styled from 'styled-components'
import AOS from 'aos';
function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {

  return (
    <Wrap bgImage={backgroundImg} >

      <ItemText  >
        <h1>{title}</h1>
        <p>{description} </p>
      </ItemText>


      <Button>

        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {rightBtnText &&
            <RightButton>
              {rightBtnText}
            </RightButton>
          }
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg" />

      </Button>
    </Wrap>
  )
}

const Wrap = styled.div`

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => ` url('/images/${props.bgImage}')`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`
const ItemText = styled.div`
 padding-top: 18vh;
 text-align: center;
 z-index: 10;
`
const ButtonGroup = styled.div`
 display: flex; 
 margin-bottom: 30px;
 @media (max-width: 768px) {
     flex-direction: column;
     
 }
`
const LeftButton = styled.div`
 background-color: rgba(23,26,32,0.8);
 height: 40px;
 width: 256px;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 110px;
 opacity: 0.85;
 text-transform: uppercase;
 font-size: 12px;
 cursor: pointer;
 margin: 8px;
`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`
const DownArrow = styled.img`
  justify-content: center;
  align-items: center;
  margin-left: 45%;
  margin-right: 50%;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown Infinite 1.5s;
`
const Button = styled.div`
 
`

export default Section
