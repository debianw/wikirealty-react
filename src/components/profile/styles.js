//
import { makeStyles } from '@material-ui/styles'

//
export default makeStyles(theme => {
  return ({
    root: {
    },
    headerSection: {
      background: '#FFFFFF',
      marginBottom: '2px',
    },
    mainContainer: {
      background: '#FFFFFF',
      padding: '30px',
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      }
    },
    leftSideBar: {
      marginRight: '30px',
      [theme.breakpoints.down('sm')]: {
        margin: 0,
      }
    },
    socialLinks: {
      marginBottom: '20px',
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  })
})