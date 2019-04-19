import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SocialLinks from './SocialLinks'

const Header = styled.header`
  z-index: 10;
  position: fixed;
  height: ${props => (props.expanded ? 'auto' : '60px')};
  width: ${props => (props.expanded ? 'auto' : '60px')};
  top: 0;
  right: 0;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: flex-end;
  transition: all 0.25s;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.responsive.small}) {
    max-width: 70vw;
    opacity: ${props => (props.expanded ? '0.95' : '0.7')};
    padding: ${props => (props.expanded ? '2rem 1rem 1.5rem' : '0')};
    nav {
      display: ${props => (props.expanded ? 'block' : 'none')};
      font-size: 10vw;
    }
  }

  background: ${props => props.theme.colors.base};

  @media (min-width: ${props => props.theme.responsive.small}) {
    nav {
      display: block;
    }

    top: 0;
    left: 0;
    height: 100vh;
    width: 20vw;
  }

  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: ${props => props.theme.offsets.sidebar.medium};
  }
`

const Nav = styled.nav`
  width: 100%;
  text-align: right;

  a {
    width: 100%;
    display: block;
    font-family: 'Fira Code', sans-serif;
    font-weight: 300;
    text-decoration: none;
    color: DarkGray;
    transition: all 0.4s;
    padding: 0.5rem 0;

    &:hover {
      color: white;
      background-color: rgba(255, 255, 255, 0.05);
    }
  }

  @media (min-width: ${props => props.theme.responsive.small}) {
    a {
      text-align: center;
    }
  }
`

const Avatar = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.responsive.small}) {
    margin-top: 2rem;
    display: block;
  }

  margin: 1rem auto 2rem;
  width: 50%;
  max-width: 110px;
  transition: all 0.4s;

  &:hover {
    width: 55%;
    max-width: 120px;
  }

  img {
    border: 3px solid white;
    display: block;
    margin: 0 auto;
    border-radius: 100px;
  }
`

const MenuButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  width: 60px;
  border: none;
  background: none;
  color: #ffffff;
  font-size: 2rem;
  line-height: 2rem;

  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.responsive.small}) {
    display: none;
  }
`

const activeLinkStyle = {
  color: 'white',
}

class Menu extends Component {
  state = { expanded: false }

  close = () => {
    this.setState(prevState => ({
      expanded: false,
    }))
  }

  toggle = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }))
  }

  render = () => {
    const portrait = this.props.data.allContentfulAsset.edges[0].node.fluid
    const { expanded } = this.state

    return (
      <Header expanded={expanded}>
        {expanded ? (
          <MenuButton onClick={this.toggle}>X</MenuButton>
        ) : (
          <MenuButton onClick={this.toggle}>&#9776;</MenuButton>
        )}
        <Avatar>
          <Link to="/">
            <Img fluid={portrait} objectFit="cover" objectPosition="50% 50%" />
          </Link>
        </Avatar>
        <Nav>
          <Link onClick={this.close} to="/" activeStyle={activeLinkStyle}>
            Home
          </Link>
          <Link onClick={this.close} to="/about/" activeStyle={activeLinkStyle}>
            About
          </Link>
          <Link
            onClick={this.close}
            to="/contact/"
            activeStyle={activeLinkStyle}
          >
            Contact
          </Link>
        </Nav>
        <SocialLinks expanded={expanded} />
      </Header>
    )
  }
}

const MenuWithQuery = props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAsset(filter: { title: { eq: "ian-portrait" } }) {
          edges {
            node {
              title
              fluid {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props} />}
  />
)

export default MenuWithQuery
