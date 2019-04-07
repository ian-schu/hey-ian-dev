import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  min-height: 300px;
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
  &::before {
    content: '';
    background: ${props => `rgba(0,0,0, ${1 - props.opacity})`};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
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
