import React from 'react'
import styled from 'styled-components'
import icons from 'simple-icons'

const SocialLink = styled.a`
  fill: ${props => props.theme.colors.tertiary};
  height: 25px;
  width: 25px;
  flex: none;

  &:hover {
    fill: #e5dc34;
  }
`

const Container = styled.div`
  width: 60%;
  margin: 2rem auto 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;

  @media (max-width: ${props => props.theme.responsive.small}) {
    margin: 1rem auto;
    width: 100%;
    a {
      display: ${props => (props.expanded ? 'initial' : 'none')};
      height: 45px;
      width: 45px;
      margin: 0 5px;
    }
  }
`

const svgFromIcon = iconKey => ({
  __html: icons[iconKey].svg,
})

// <SocialLink href="https://dev.to/ianschu" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={svgFromIcon('dev.to')} />

const SocialLinks = props => (
  <Container expanded={props.expanded}>
    <SocialLink
      href="https://github.com/ian-schu"
      target="_blank"
      rel="noopener noreferrer"
      dangerouslySetInnerHTML={svgFromIcon('GitHub')}
    />
    <SocialLink
      href="https://www.linkedin.com/in/ianschumann/"
      target="_blank"
      rel="noopener noreferrer"
      dangerouslySetInnerHTML={svgFromIcon('LinkedIn')}
    />

    <SocialLink
      href="https://medium.com/@ianschum"
      target="_blank"
      rel="noopener noreferrer"
      dangerouslySetInnerHTML={svgFromIcon('Medium')}
    />
  </Container>
)

export default SocialLinks
