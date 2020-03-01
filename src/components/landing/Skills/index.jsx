import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Jayson and I’m a Software & DevOps Engineer!" />
      </Thumbnail>
      <Details>
        <h1>Technologies</h1>
        <p>
          AWS, TypeScript, React, Embedded, etc.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
