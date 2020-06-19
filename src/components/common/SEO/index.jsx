import React from 'react'
import Helmet from 'react-helmet'
import Thumbnail from 'assets/thumbnail/thumbnail.png'

export const SEO = () => {

  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "Jayson Nabor",
		"url": "${process.env.GATSBY_URL}",
		"logo": "${process.GATSBY_LOGO}",
		"foundingDate": "2014",
		"founders": [{
			"@type": "Person",
			"name": "Jayson Nabor"
		}]
  	}`

  return (
    <Helmet>
      <meta name="description" content={process.env.GATSBY_DESCRIPTION} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={process.env.GATSBY_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jayson Nabor" />
      <meta property="og:description" content={process.env.GATSBY_DESCRIPTION} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="fb:app_id" content={process.env.GATSBY_SOCIAL_FACEBOOK} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={process.env.GATSBY_SOCIAL_TWITTER} />
      <meta name="twitter:site" content={process.env.GATSBY_SOCIAL_TWITTER} />
      <meta name="twitter:title" content={process.env.GATSBY_TITLE} />
      <meta name="twitter:description" content={process.env.GATSBY_DESCRIPTION} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={process.env.GATSBY_GOOGLE} />
      <title>Jayson Nabor</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}
