import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import styled from 'styled-components'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges

  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        {isFirstPage ? (
          <main>
            <Welcome>
              <h1>Ian on things</h1>
              <h3>
                Connecting dots between neuroscience, sociology, futurism,
                linguistics, ethics, and software engineering. Also, sarcasm.
              </h3>
            </Welcome>
            <CardList>
              {posts.map(({ node: post }) => (
                <Card key={post.id} {...post} />
              ))}
            </CardList>
          </main>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

const Welcome = styled.section`
  border-bottom: ${props => `1px solid ${props.theme.colors.base}`};

  text-align: center;

  h1 {
    font-size: 5em;
    margin: 0 auto 1rem;
  }
`

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          updatedAt(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          metaDescription {
            metaDescription
          }
          body {
            childMarkdownRemark {
              timeToRead
              wordCount {
                words
              }
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index
