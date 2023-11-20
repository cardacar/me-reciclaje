import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { InnerLayout } from '../styles/Layout'
import card from '../assets/img/creditcard.svg';
import active from '../assets/img/active.svg';
import inactive from '../assets/img/inactive.svg';
import check from '../assets/img/check.svg';
import checkDisabled from '../assets/img/check-disabled.svg';



const PaymentSection = () => {
   return (
      <PaymentStyled id='pricing'>
         <InnerLayout>
            <div data-aos='fade-down-right'>
               <h3 className="small-heading">
                  Objetivos
               </h3>
            </div>
            <div className='card-con'>
               <Card
                  account={'General'}
                  text={'Nuestro objetivo es apoyar la creacion de ambientes en hogares y oficinas que proporcionen un toque de elegancia con las cortinas hechas de residuos reciclables y una fineza para nuestros clientes a traves de propuestas decorativas innovadoras y rentables para todos los clientes y todo el mundo'}
               />

               <Card
                  account={'Especifico'}
                  text={'Manage your business with a simple and efficient account.'}
                  button={'Get Started'}
                  check={check}
                  text1={'Garantizar una calidad en las cortinas reciclables'}
                  text2={'Mantener un mejor mantenimiento de los articulos'}
                  text3={'Garantizar a gran escala nuevos articulos de cortinas reciclables'}
               />
            </div>
         </InnerLayout>
      </PaymentStyled>
   )
}

const PaymentStyled = styled.section`
 .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 6.4rem;
        
        @media screen and (max-width: 689px){
          grid-template-columns: repeat(1, 1fr);
        }
    }
   p{
      text-align: center;
   }
`

export default PaymentSection
