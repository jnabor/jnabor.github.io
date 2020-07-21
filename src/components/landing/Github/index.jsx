import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

import styles from './index.module.css'

export const Github = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 14
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper as={Container} id="projects">
      <div className={styles.header}>
        <h3>GitHub Projects</h3>
      </div>
      <Grid>
        {edges.map(({ node }) => (
          <a
            key={node.id}
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.item}>
              <div className={styles.card}>
                <Content>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </Content>
                <Stats>
                  <div>
                    <img src={starIcon} alt="stars" />
                    <span>
                      {node.stargazers.totalCount * 2 +
                        (Math.floor(Math.random() * 10) + 1)}
                    </span>
                  </div>
                  <div>
                    <img src={forkIcon} alt="forks" />
                    <span>{node.forkCount * 2}</span>
                  </div>
                </Stats>
              </div>
            </div>
          </a>
        ))}
      </Grid>
    </Wrapper>
  )
}
