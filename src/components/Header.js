import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import AOS from 'aos';
function Header() {


    return (

        <Container>

            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>



            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>

            </RightMenu>

        </Container>

    )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
      font-weight: 600;
       text-transform: uppercase;
       padding: 0 10px;
       flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
      display: none;
  }
`
const RightMenu = styled.div`
   display: flex;
   align-items: center;
  a{
      font-weight: 600;
       text-transform: uppercase;
       margin-right: 10px;
      
  }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer ;
`

export default Header;
