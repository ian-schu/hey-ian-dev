import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  min-height: 300px;
  margin: 0 auto;
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  margin: 0 auto;
  max-width: 1200px;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

const Title = styled.h1`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
`

const Hero = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <BgImg
      opacity={props.opacity}
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    />
  </Wrapper>
)

Hero.defaultProps = {
  opacity: '0.75',
}

export default Hero
