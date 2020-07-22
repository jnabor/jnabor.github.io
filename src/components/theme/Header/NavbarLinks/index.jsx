import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import homeIcon from '../../../../assets/illustrations/home.svg'
import { Wrapper, HomeIcon, NavButton } from './styles'

const NavbarLinks = () => (
  <Wrapper >
    <div>
      <AnchorLink href="#home" style={{ color: '#EFEFEF' }}>
        <HomeIcon current>
          <img src={homeIcon} alt="home" style={{ padding: '0', margin: '0', height: '24px', width: '24px'}}/>
        </HomeIcon>
      </AnchorLink>
    </div>
    <div>
      <AnchorLink href="#projects" style={{ color: '#EFEFEF' }}>
        <NavButton>
            PROJECTS
        </NavButton>        
      </AnchorLink>
    </div>
    <div>
      <AnchorLink href="#about" style={{ color: '#EFEFEF' }}>
      <NavButton>
        SKILLS
        </NavButton> 
      </AnchorLink>
    </div>
    <div>
      <AnchorLink href="#contact" style={{ color: '#EFEFEF' }}>
      <NavButton>
        CONTACT
        </NavButton> 
      </AnchorLink>
    </div>
  </Wrapper>
)

export default NavbarLinks
