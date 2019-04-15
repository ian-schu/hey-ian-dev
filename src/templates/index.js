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
import Chat from '../components/Chat'
import styled from 'styled-components'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges

  const chatData = data.allContentfulChat.edges[0].node

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
            <Welcome>Hey Ian!</Welcome>
            <Chat data={chatData} />
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

const Welcome = styled.h1`
  font-size: 5em;
  text-align: center;
  margin: 0 auto 1rem;
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
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulChat(filter: { name: { eq: "Landing" } }) {
      edges {
        node {
          name
          authors {
            name
            role
            status
            avatar {
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          chatBlob {
            author
            text
          }
        }
      }
    }
  }
`

export default Index
