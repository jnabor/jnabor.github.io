import React from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
    <h2>Contact Me</h2>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Jayson and I’m a Software Engineer!" />
    </Thumbnail>

  </Wrapper>
)
