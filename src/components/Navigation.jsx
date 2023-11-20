import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
//import PrimaryButton from './PrimaryButton'
import logo from '../assets/img/Logo1.svg'

const Navigation = () => {



   return (
      <NavigationStyled>
         <div className="logo">
            <img src={logo} alt="" height="100" width="100" style={{marginTop: "30px", color:"green"}}/>
         </div>
         <ul>
            <li>
               <Link to="header" spy={true} smooth={true}>Inicio </Link>
            </li>
            <li>
               <Link to="feathures" spy={true} smooth={true}>Nuestra Filosofia </Link>
            </li>
            <li>
               <Link to="pricing" spy={true} smooth={true}>Objetivos </Link>
            </li>
         </ul>
         
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   ul{
      display: flex;
      justify-content: space-between;
      width: 40%;
      li{
         cursor: pointer;
      }
   }
`

export default Navigation
