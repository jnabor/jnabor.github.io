import React from 'react';
import { Layout, SEO } from 'components/common';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <div style={{ padding: '20px' }}><p>You've just hit a route that doesn&#39;t exist.</p></div>
  </Layout>
);
