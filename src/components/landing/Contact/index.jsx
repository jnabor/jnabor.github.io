import React from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'
import styles from './index.module.css'

export const Contact = () => (
         <Wrapper as={Container} >
           <Details id="contact" >
             <div className={styles.header}>
               <h3>Contact Me</h3>
             </div>

             <ContactForm />
           </Details>
           <Thumbnail>
             <img src={contact} alt="I’m Jayson and I’m a Software Engineer!" />
           </Thumbnail>
         </Wrapper>
       )
