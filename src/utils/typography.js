import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

altonTheme.overrideStyles = ({ rhythm }, options) => ({
  li: {
    marginBottom: '10px',
  },
})

const typography = new Typography(altonTheme)

export default typography
