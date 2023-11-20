import React from 'react'
import styled, { keyframes } from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import card from '../assets/img/Cortinas-inspiradas.jpg'
//import { fadeInLeft } from 'react-animations'

const CardSection = () => {
   return (
      <CardSectionStyled id='card'>
         <InnerLayout >
            <div className="card-container">
               <div  className="card-left">
                  <h2 data-aos='fade-right' data-aos-duration='3000' className="secondary-heading" >
                     Quienes somos
                  </h2>
                  <p>
                  En nuestra empresa estamos muy comprometidos con nuestros clientes estamos trabajando todas las semanas gracias a nuestra empresa contamos con cinco maquinas donde sacamos nuestros diseños a los que nuestros clientes quieren y empezamos a elaborar y creamos cortinas en nuestra, contamos con una persona que esta encargada de ir a las casas de nuestros clientes toma medidas de la casa y asi las cortinas sirven para todos los lados del hogar y asi tendriamos cortinas lindas para que nuestros clientes queden satisfechos y nuestra empresa vaya creciendo mas ya que es una empresa que esta contra la contaminacion del planeta
                  </p>
               </div>
               <div className="card-right">
                  <img src={card} alt="" width="450" height="550" />
               </div>
            </div>
         </InnerLayout>
      </CardSectionStyled>
   )
}
// const FadeInLeft = styled.h1`
//    animation: 2s ${keyframes`${fadeInLeft}`};
// `

const CardSectionStyled = styled.section`
   .card-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 845px){
         grid-template-columns: repeat(1, 1fr);
      }

      .card-right{
         display: flex;
         justify-content: flex-end;
      }
      .card-left{

         p{
            padding: 1rem 0;
         }
      }
   }
`

export default CardSection
