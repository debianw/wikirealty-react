//
import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  profileHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#4A4A4A",
  },

  profileHeaderTitle: {
    fontSize: "32px",
    fontWeight: "600",
    letterSpacing: "-1px",
    lineHeight: "36px",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "14px",
    }
  },

  profileHeaderCompany: {
    fontSize: "24px",
    fontWeight: "500",
    letterSpacing: "-.5px",
    lineHeight: "28px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "14px",
    }
  },

  profileHeaderAreaServed: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#9b9b9b",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  profileAvatar: {
    width: "128px",
    height: "128px",
    marginRight: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    }
  },

  profileLocationIcon: {
    color: "#ff6e4a",
    fontSize: "14px",
    marginRight: "2px",
  }
}))