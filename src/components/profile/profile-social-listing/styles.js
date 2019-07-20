//
import { makeStyles } from '@material-ui/styles'

//
export default makeStyles(theme => {
  return {
    root: {
      marginBottom: '20px',
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },

    title: {
      color: "#4A4A4A",
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "18px",
      marginBottom: "20px",
    },

    actions: {
      "& > *": {
        marginBottom: "10px",
      }
    },

    socialButton: {

    }
  }
})