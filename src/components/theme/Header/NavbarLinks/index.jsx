import React, {useState, useEffect} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import homeIcon from '../../../../assets/illustrations/home.svg'
import { Wrapper, HomeIcon, NavButton } from './styles'

const NavbarLinks = () => {
  const [home, setHome] = useState(true)
  const [project, setProject] = useState(false)
  const [skills, setSkills] = useState(false)
  const [contact, setContact] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    setHome(window.scrollY < 200 && window.scrollY > -1)
    setProject(window.scrollY < 1200 && window.scrollY >= 200)
    setSkills(window.scrollY < 3000 && window.scrollY >= 1200)
    setContact(window.scrollY >= 3000)
    console.log(window.scrollY)
  }


  return (
  <Wrapper >
    <div>
      <AnchorLink href="#home" style={{ color: '#EFEFEF' }}>
        <HomeIcon current={home}>
          <img src={homeIcon} alt="home" style={{ padding: '0', margin: '0', height: '24px', width: '24px'}}/>
        </HomeIcon>
      </AnchorLink>
    </div>
    <div>
      <AnchorLink href="#projects" style={{ color: '#EFEFEF' }}>
        <NavButton current={project}>
            PROJECTS
        </NavButton>        
      </AnchorLink>
    </div>
    <div>
      <AnchorLink href="#about" style={{ color: '#EFEFEF' }}>
      <NavButton current={skills}>
        SKILLS
        </NavButton> 
      </AnchorLink>
    </div>
    <div>
      <AnchorLink href="#contact" style={{ color: '#EFEFEF' }}>
      <NavButton current={contact}>
        CONTACT
        </NavButton> 
      </AnchorLink>
    </div>
  </Wrapper>)
}

export default NavbarLinks
