import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  font-size: 0.8rem;
  > ul {
    list-style-type: none;
    margin: 0;
    > li {
      margin: 0;
      line-height: 1.2rem;
    }
  }
  text-align: left;
  margin: 0 0 2rem;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding-bottom: 2rem;
  border-bottom: ${props => `1px solid ${props.theme.colors.tertiary}`};
`

const Tags = styled.ul`
  width: auto;
  list-style-type: none;
  display: inline-block;
  margin: 0;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline;
  margin: 0 0.2em 0.2em 0.4rem;
  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`

const Label = styled.span`
  font-weight: 600;
  display: inline-block;
  margin: 0 0.2rem 0 0;
`

const TagList = ({ tags }) =>
  tags && (
    <>
      <Label>Tagged in:</Label>
      <Tags>
        {tags.map(tag => (
          <Tag key={tag.id}>
            <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
          </Tag>
        ))}
      </Tags>
    </>
  )

const PostMeta = ({ publishedAt, updatedAt, tags }) => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Label>Published:</Label> {publishedAt}
        </li>
        <li>
          <Label>Last updated:</Label> {updatedAt}
        </li>
        {tags && (
          <li>
            <TagList tags={tags} />
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

export default PostMeta
