import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'

kirkhamTheme.scaleRatio = 2.8
kirkhamTheme.baseFontSize = '20px'
kirkhamTheme.includeNormalize = true

kirkhamTheme.overrideStyles = ({ rhythm }, options) => ({
  li: {
    marginBottom: '10px',
  },
})

const typography = new Typography(kirkhamTheme)

export default typography
