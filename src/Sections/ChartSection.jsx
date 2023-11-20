import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import ChartStats from '../components/ChartStats'
import chart from '../assets/img/chart.svg'
import AnimatedButton from '../components/AnimatedButton'


const ChartSection = () => {
   return (
      <ChartStyled  id='feathures'>
         <InnerLayout>
            <div className="chart-con">
               <div className="chart-left">
                  <div className="stats">
                     <div className="stats-money">
                        <ChartStats name={'Año'} amount={'2025'} />
                        <ChartStats name={'Numero'} amount={'#1'} />
                     </div>
                     <img src={chart} alt="" />
                  </div>
               </div>
               <div className="chart-right">
                  <h2 data-aos='fade-right' className="secondary-heading">
                     Vision
                  </h2>
                  <p>
                  Para el año 2025 cortinas reciclables se posicionara como la mejor empresa regional en la decoracion de interiore, especialmente en el cubrimiento de ventanas. Ofreciendo productos y servicios de alta calidad en diseño y decoracion orientados a la satisfacion de nuestros clientes, otorgado un mejoramiento en la calidad de vida.
                  </p>

               </div>
            </div>
         </InnerLayout>
      </ChartStyled >
   )
}
const ChartStyled = styled.section`
   .chart-con{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
      }
      .chart-left{
         width: 80%;
         @media screen and (max-width: 1347px){
            width: 100%;
         }

         .stats{
            img{
               box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
               border-radius: 62px;
               width: 100%;
            }
            .stats-money{
               display: flex;
               padding-bottom: 1.3rem;
               justify-content: space-between;
            }
         }
      }
      .chart-right{
         padding-left: 2rem;
         p{
            padding: 1.3rem 0;
         }
      }
   }
`

export default ChartSection
