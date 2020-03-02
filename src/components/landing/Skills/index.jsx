import React from 'react'
import { Container } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Jayson and I’m a Software Engineer!" />
      </Thumbnail>
      <Details>
        <h1>Full Stack</h1>
        <p>
          AWS, TypeScript, React, Node, etc.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
