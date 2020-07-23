import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Github } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Github />
    <Contact />
  </Layout>
);
