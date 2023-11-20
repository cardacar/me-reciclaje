import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'


const FAQSection = () => {
   return (
      <FaqStyled id='faq'>
         <InnerLayout>
            <div  data-aos='fade-right'>
            
               <h1 className="small-heading">
                  Responsable
               </h1>
            
               <h3 className="small-heading">Maikol Esneider Sierra Correa</h3>
               <p className='c-para'>
               Grado 10
               </p>
               <p className='c-para'>
               Institución Educativa Madre Laura Montoya
               </p>
            </div>

         </InnerLayout>
      </FaqStyled>
   )
}
const FaqStyled = styled.section`
   .c-para{
      width: 60%;
      margin: 0 auto;
   }
   .lines{
      position: absolute;
      left: 0;
      top: 360%;
      width: 100%;
      z-index: -1;

      img{
         width: 100%;
      }
   }
   .questions-con{
      padding-top: 2rem;
   }

`

export default FAQSection
