import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Brand } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/"><Brand>
		<div>
			<img src="./icons/jayson_64.png" />
		</div>
		<div style={{ paddingTop: '27px' }}>JAYSON NABOR</div>
		</Brand></Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
