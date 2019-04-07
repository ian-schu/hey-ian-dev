import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import ToC from '../components/ToC'
import Hero from '../components/Hero'

const PageTemplate = ({ data }) => {
  const { title, slug, body, heroImage } = data.contentfulPage
  const headings = body.childMarkdownRemark.headings
  const postNode = data.contentfulPage

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <Hero title={title} opacity="1" image={heroImage} height={'50vh'} />
      <Container>
        <ToC headings={headings} />
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          headings {
            value
            depth
          }
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
