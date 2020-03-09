import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Sidebar = ({ sidebar, toggle }) => (
	<Wrapper active={sidebar} onClick={()=> toggle(false)}>
		<NavbarLinks />
	</Wrapper>
)

export default Sidebar
