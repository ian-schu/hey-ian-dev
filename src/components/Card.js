import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Post = styled.li`
  // border: 1px solid ${props => props.theme.colors.secondary};
  // border-width: 1px 0;
  // border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.7s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
    margin: 0 auto 2vh;
    max-width: 950px;
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    padding: 0.8rem;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
  }
`

const Title = styled.h2`
  margin: 0 0 0.6rem;
`

const Date = styled.h4`
  margin: 0 0 0.8rem;
  color: ${props => props.theme.colors.secondary};
`

const Excerpt = styled.p`
  line-height: 1.6;
`

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => (
  <Post featured={props.featured}>
    <Link to={`/${slug}/`}>
      <Title>{title}</Title>
      <Date>{publishDate}</Date>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.excerpt,
        }}
      />
    </Link>
  </Post>
)

export default Card
