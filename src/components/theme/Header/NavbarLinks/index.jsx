import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#projects" style={{ color: '#EFEFEF' }}>
      Projects
    </AnchorLink>
    <AnchorLink href="#about" style={{ color: '#EFEFEF' }}>
      Skills
    </AnchorLink>
    <AnchorLink href="#contact" style={{ color: '#EFEFEF' }}>
      Contact
    </AnchorLink>
  </Wrapper>
)

export default NavbarLinks
