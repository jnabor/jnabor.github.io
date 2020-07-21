import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Grid } from './styles'
import styles from './index.module.css';

export const Projects = () => {

  return (
    <Wrapper as={Container} id="projects">
      <div className={styles.header}>Personal Projects</div>

      <Grid>
        <a target="_blank" rel="noopener noreferrer" href="https://saeyr.com">
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={`${styles.thumbnail} ${styles.thumbnail2}`} />
              <div className={styles.content}>
                <div className={styles.logo}>
                  <img src="./icons/saeyr_64.png" />
                </div>
                <div className={styles.desc}>
                  <div className={styles.title}>Saeyr™</div>
                  <div style={{ padding: '0px 15px 0 10px' }}>
                    Automation for voice and text processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ra2.sonabstudios.com"
        >
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={`${styles.thumbnail} ${styles.thumbnail1}`} />
              <div className={styles.content}>
                <div className={styles.logo}>
                  <img src="./icons/ra2_64.png" />
                </div>
                <div className={styles.desc}>
                  <div className={styles.title}>RA2™ Serverless</div>
                  <div style={{ padding: '0px 15px 0 10px' }}>
                    SaaS Starter Kit with React, AWS Amplify
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jnabor.github.io/kryptodash"
        >
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={`${styles.thumbnail} ${styles.thumbnail3}`} />
              <div className={styles.content}>
                <div className={styles.logo}>
                  <img src="./icons/kryptodash_64.png" />
                </div>
                <div className={styles.desc}>
                  <div className={styles.title}>KryptoDash™</div>
                  <div style={{ padding: '0px 15px 0 10px' }}>
                    Cryptocurrency prices and history
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sonabstudios.com"
        >
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={`${styles.thumbnail} ${styles.thumbnail5}`} />
              <div className={styles.content}>
                <div className={styles.logo}>
                  <img src="./icons/sonabstudios_64.png" />
                </div>
                <div className={styles.desc}>
                  <div className={styles.title}>SonabStudios™</div>
                  <div style={{ padding: '0px 15px 0 10px' }}>
                    My website created with Nuxt.js
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jnabor.github.io/react-robot-game/"
        >
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={`${styles.thumbnail} ${styles.thumbnail4}`} />
              <div className={styles.content}>
                <div className={styles.logo}>
                  <img src="./icons/robot_64.png" />
                </div>
                <div className={styles.desc}>
                  <div className={styles.title}>Robot Game™</div>
                  <div style={{ padding: '0px 15px 0 10px' }}>
                    A simple matrix game made with React
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Grid>
    </Wrapper>
  )
}
