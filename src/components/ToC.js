import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Convert plain heading text to match autolink-headers
const headingToLink = heading =>
  heading
    .split(' ')
    .map(word => word.replace(/\W/g, '').toLowerCase())
    .join('-')

const Bullet = styled.li`
  margin-left: ${props => `${props.depth - 1}rem`};
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const TableOfContents = styled.div`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  line-height: 1rem;
  a {
    color: gray;
  }
`

const ToC = props => (
  <TableOfContents>
    <h2>Contents</h2>
    <p>
      <ul>
        {props.headings
          .filter(h => h.depth < 3)
          .map(heading => {
            const text = heading.value
            const depth = heading.depth

            return (
              <Bullet key={text} depth={depth}>
                <a href={`#${headingToLink(text)}`}>{text}</a>
              </Bullet>
            )
          })}
      </ul>
    </p>
  </TableOfContents>
)

ToC.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      depth: PropTypes.number,
    })
  ),
}

export default ToC
