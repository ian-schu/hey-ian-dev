import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Post = styled.li`
  margin: 0 0 0.5rem 0;
  width: 100%;
  transition: background 0.7s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
    margin: 0.5rem auto 0.4rem;
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

const Title = styled.h1`
  margin: 0 0 0.6rem;
`

const DateSpan = styled.span`
  display: inline-block;
  width: 200px;
`

const DateLabel = styled.h5`
  font-style: normal;
  margin: 0 0.3rem 0 0;
  display: inline;
  color: ${props => props.theme.colors.secondary};
`

const Date = styled.h5`
  margin: 0 1rem 0 0;
  display: inline;
  color: ${props => props.theme.colors.primary};
`

const Excerpt = styled.p`
  font-size: 0.9rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
`

const Card = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  metaDescription,
  updatedAt,
  ...props
}) => (
  <Post featured={props.featured}>
    <Link to={`/${slug}/`}>
      <Title>{title}</Title>
      <Excerpt>{metaDescription.metaDescription}</Excerpt>
      <div>
        <DateSpan>
          <DateLabel>Published:</DateLabel>
          <Date>{publishDate}</Date>
        </DateSpan>
        <DateSpan>
          <DateLabel>Last updated:</DateLabel>
          <Date>{updatedAt}</Date>
        </DateSpan>
      </div>
    </Link>
  </Post>
)

export default Card
