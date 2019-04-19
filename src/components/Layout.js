import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import '../styles/global.css'

const Outer = styled.div`
  margin-left: 0;

  @media (min-width: ${props => props.theme.responsive.small}) {
    margin-left: 20vw;
  }

  @media (min-width: ${props => props.theme.responsive.medium}) {
    margin-left: ${props => props.theme.offsets.sidebar.medium};
  }
`

const Content = styled.main`
  width: 100%;
  min-height: 92vh;
`

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <Menu />
          <Outer>
            <Content>{children}</Content>
            <Footer />
          </Outer>
        </>
      </ThemeProvider>
    </div>
  )
}

export default Template
