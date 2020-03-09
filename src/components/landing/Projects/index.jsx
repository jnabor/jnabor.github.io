import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Grid, Item, Card, Content, Thumbnail1, Thumbnail2 } from './styles'

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
            <Thumbnail1/>
            <Content>
              <h4>RA2™ Serverless</h4>
              <p>SaaS Starter Kit wih React, AWS Amplify</p>                
            </Content>            
          </Card>
        </Item>
        <Item 
          as="a"
          target="_blank"
          rel="noopener noreferrer"href="https://dev.texspeech.com">                     
          <Card>
            <Thumbnail2/>
            <Content>
              <h4>TexSpeech™</h4>
              <p>A service that turns text into lifelike speech</p>                
            </Content>            
          </Card>
        </Item>
        </Grid>
    </Wrapper>
  )
}
