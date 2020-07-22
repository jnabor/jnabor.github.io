import React from 'react'
import { Header } from 'components/theme'
import { Container } from 'components/common'
import dev from 'assets/illustrations/intro.svg'
import { Wrapper, AppBar, IntroWrapper, IntroText, Details, Thumbnail } from './styles'

export const Intro = () => (
  <>
             <AppBar>
              <Header />
           </AppBar>  
         <Wrapper id="home">         
           <IntroWrapper as={Container}>
             <IntroText >
              <img src="./icons/jayson_192.png" />
             </IntroText>
             <Details>
               <h1 style={{ color: '#EFEFEF' }}>
                 hello, I'm <b>Jayson</b>
               </h1>
               <h4 style={{ color: '#C5C5C5' }}>I'm a Full Stack Developer.</h4>
             </Details>
             <Thumbnail>
               <img src={dev} alt="I’m Jayson and I’m a Software Engineer!" />
             </Thumbnail>
           </IntroWrapper>
         </Wrapper>
         </>
       )
