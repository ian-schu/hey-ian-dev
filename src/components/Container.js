import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  flex-grow: 1;

  padding: 0.4rem;

  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 90%;
    padding: 3em 0.5em 1em;
  }

  @media (min-width: ${props => props.theme.responsive.medium}) {
    padding: 3em 1.5em 2em;
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
