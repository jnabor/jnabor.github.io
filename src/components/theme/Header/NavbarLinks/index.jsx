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
    setHome(false)
    setProject(false)
    setSkills(false)
    setContact(false)

    if (isVisible(window.document.getElementById('home'))) {
      setHome(true)
    } else if (isVisible(window.document.getElementById('projects'))) {
      setProject(true)
    }  else if (isVisible(window.document.getElementById('about'))) {
      setSkills(true)
    } else if (isVisible(window.document.getElementById('contact'))) {
      setContact(true)
    }    
  }

  const isVisible = (el) => {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
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
