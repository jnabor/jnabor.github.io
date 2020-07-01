import React from 'react'
import { Container } from 'components/common'
import dev2 from 'assets/illustrations/skills2.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from '../Skills/styles'

export const Embedded = () => (
  <Wrapper id="about2">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev2} alt="I’m Jayson and I’m a Software Engineer!" />
      </Thumbnail>
      <Details>
        <h1>Embedded</h1>
        <p>
          C/C++, Firmware, Linux, IoT
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
