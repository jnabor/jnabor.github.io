import React from 'react';
import { Layout, SEO } from 'components/common';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <div style={{ textAlign: 'center', height: `calc(100vh - 422px)`}}><h2 style={{ marginTop: '80px'}}>You've just hit a route that doesn&#39;t exist.</h2></div>
  </Layout>
);
