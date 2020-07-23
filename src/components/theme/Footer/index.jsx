import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
         <Wrapper>
           <Flex as={Container}>
             <Details>
               <h3 style={{ color: '#434343', marginBottom: '10px' }}>Jayson Nabor</h3>
               <span style={{ color: '#636363' }}>
                 © All rights are reserved {new Date().getFullYear()}
               </span>
             </Details>
             <Links>
               {social.map(({ id, name, link, icon }) => (
                 <a
                   key={id}
                   href={link}
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label={`follow me on ${name}`}
                 >
                   <img width="24" src={icon} alt={name} />
                 </a>
               ))}
             </Links>
           </Flex>
         </Wrapper>
       )
