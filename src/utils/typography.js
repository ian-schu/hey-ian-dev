import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'

kirkhamTheme.googleFonts = [
  {
    name: 'Playfair Display',
    styles: ['700'],
  },
  {
    name: 'Fira Sans',
    styles: ['300', '300i', '400', '400i', '700', '700i'],
  },
  {
    name: 'Gentium Basic',
    styles: ['400i'],
  },
]
kirkhamTheme.blockMarginBottom = 1.0
kirkhamTheme.baseLineHeight = 1.55
kirkhamTheme.scaleRatio = 2.8
kirkhamTheme.baseFontSize = '20px'
kirkhamTheme.boldWeight = 400
kirkhamTheme.bodyWeight = 300
kirkhamTheme.bodyColor = 'hsla(0,0%,0%,0.7)'
kirkhamTheme.includeNormalize = true

kirkhamTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'h3,h4,h5': {
    color: 'hsla(0,0%,0%,0.75)',
    fontFamily: "'Gentium Basic', serif",
    fontWeight: '400',
    fontStyle: 'italic',
  },
})

const typography = new Typography(kirkhamTheme)

export default typography
