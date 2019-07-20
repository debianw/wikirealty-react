//
import { makeStyles } from '@material-ui/styles'

//
export default makeStyles(theme => {
  return {
    root: {
      display: "flex",
      padding: "30px",
      [theme.breakpoints.down('sm')]: {
        padding: "10px 15px",
      },
      justifyContent: "space-between",
      alignItems: "center",
    },

    actions: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      },
      "& > a": {
        marginRight: "10px"
      }
    },
  }
})