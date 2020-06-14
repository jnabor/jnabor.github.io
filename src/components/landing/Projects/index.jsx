import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Grid, Item, Card, Content, Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4 } from './styles'

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
              <h4>RA2™ Serverless</h4>
              <p>SaaS Starter Kit wih React, AWS Amplify</p>                
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
              <h4>Saeyr™</h4>
              <p>Automation services for voice and text processing</p>                
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
              <h4>KryptoDash™</h4>
              <p>Cryptocurrency prices with charts and history </p>                
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
              <h4>Robot Game™</h4>
              <p>A simple matrix robot game made with React</p>                
            </Content>            
          </Card>
        </Item>
        </Grid>
    </Wrapper>
  )
}
