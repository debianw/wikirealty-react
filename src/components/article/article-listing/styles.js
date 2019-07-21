//
import { makeStyles } from '@material-ui/styles'

//
export default makeStyles(theme => {
  return {
    root: {
      color: "#9B9B9B",
    },

    article: {
      paddingBottom: "30px",
      marginBottom: "30px",
      borderBottom: "1px inset #E9E9E9",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
        marginBottom: 0,
      }
    },

    articleTitle: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "34px",
      marginTop: "20px",
      color: "#4A4A4A",
    },

    articlePic: {
      position: "relative",
      height: "300px",
      minHeight: "300px",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      marginBottom: "10px",
      [theme.breakpoints.down("sm")]: {
        height: "200px",
        minHeight: "auto",
        marginBottom: 0,
      },
      "& > h2": {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        margin: 0,
        fontSize: "20px",
        lineHeight: "20px",
        display: "none",
        padding: "15px",
        color: "#fff",
        height: "72px",
        background: "linear-gradient(to top,#000,rgba(0,0,0,0))",
        [theme.breakpoints.down("sm")]: {
          display: "block",
        }
      }
    },

    articleDate: {
      [theme.breakpoints.down("sm")]: {
        padding: "11px 15px",
        fontSize: "12px",
        lineHeight: "12px",
      }
    },

    articleDetail: {
      color: "#9B9B9B",
      fontSize: "18px",
      fontWeight: "500",
      letterSpacing: "-.5px",
      lineHeight: "24px",
      marginTop: "20px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      }
    }
  }
})