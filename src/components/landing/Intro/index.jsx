import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/intro.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>hello, I'm <b>Jayson</b></h1>
				<h4>I'm a Full Stack Developer.</h4>

			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Jayson and I’m a Software Engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
