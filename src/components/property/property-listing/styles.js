//
import { makeStyles } from '@material-ui/styles'

//
export default makeStyles(theme => {
  return {
    root: {
      height: "500px",
      marginBottom: "10px",
      overflow: "scroll",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
        overflow: "visible"
      }
    },

    boxTop: {
      position: 'relative',
      height: "200px",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },

    meta: {
      background: "linear-gradient(to top,#000,rgba(0,0,0,0))",
      width: "100%",
      color: "#9b9b9b",
      fontWeight: "600",
      position: "absolute",
      bottom: 0,
      padding: "0 15px 15px",
    },

    metaPrice: {
      fontSize: "24px",
      lineHeight: "28px",
      color: "#fff",
    },

    metaStreet: {
      fontSize: "12px",
      lineHeight: "14px",
      color: "#fff",
    },

    boxBottom: {
      display: "flex",
      backgroundColor: "#fff",
      color: "#9b9b9b",
      borderTop: "2px solid #f8f8f8",
      fontSize: "12px",

      "& > div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        borderLeft: "2px solid #f8f8f8",
        padding: "10px 0",
        lineHeight: "12px",
      },

      "& > div > :first-child": {
        marginRight: "5px"
      }
    },

    smallIcon: {
      fontSize: "14px"
    }
  }
})