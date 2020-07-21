import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Embedded, Contact, Projects, Github } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Github />
    <Embedded />
    <Contact />
  </Layout>
)
