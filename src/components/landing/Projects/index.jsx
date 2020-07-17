import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Grid, Item, Card, Content, Logo, Desc, Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4 } from './styles'

export const Projects = () => {

  return (
    <Wrapper as={Container} id="projects">
      <h2>Personal Projects</h2>
      <Grid>
        <Item          
           as="a"
           target="_blank"
           rel="noopener noreferrer"href="https://ra2.sonabstudios.com">
          <Card>
            <Thumbnail1 />
            <Content>
              <Logo>
              <img src="./icons/ra2_64.png" />
              </Logo>
               <Desc>
                <h4 style={{marginBottom: '0', padding: '10px'}}>RA2™ Serverless</h4>
                <div style={{color: '#555',padding: '0px 15px 0 10px' }}>SaaS Starter Kit with React, AWS Amplify</div>
              </Desc>      
            </Content>          
          </Card>
        </Item>
        <Item 
          as="a"
          target="_blank"
          rel="noopener noreferrer"href="https://saeyr.com">                     
          <Card>
            <Thumbnail2 />
            <Content>
            <Logo>
              <img src="./icons/saeyr_64.png" />
              </Logo>
              <Desc>
                <h4 style={{marginBottom: '0', padding: '10px'}}>Saeyr™</h4>
                <div style={{color: '#555',padding: '0px 15px 0 10px' }}>Automation for voice and text processing</div>
              </Desc>           
            </Content>          
          </Card>
        </Item>
        <Item 
          as="a"
          target="_blank"
          rel="noopener noreferrer"href="https://jnabor.github.io/kryptodash">                     
          <Card>
            <Thumbnail3/>
            <Content>   
              <Logo>
                <img src="./icons/kryptodash_64.png" />
              </Logo>
              <Desc>
                <h4 style={{marginBottom: '0', padding: '10px'}}>KryptoDash™</h4>
                <div style={{color: '#555',padding: '0px 15px 0 10px' }}>Cryptocurrency prices and history</div>
              </Desc>                   
            </Content>           
          </Card>
        </Item>
        <Item 
          as="a"
          target="_blank"
          rel="noopener noreferrer"href="https://jnabor.github.io/react-robot-game/">                     
          <Card>
            <Thumbnail4/>
            <Content>
              <Logo>
                <img src="./icons/robot_64.png" />
              </Logo>
              <Desc>
                <h4 style={{marginBottom: '0', padding: '10px'}}>Robot Game™</h4>
                <div style={{color: '#555',padding: '0px 15px 0 10px' }}>A simple matrix game made with React</div>
              </Desc>             
            </Content>           
          </Card>
        </Item>
        </Grid>
    </Wrapper>
  )
}
