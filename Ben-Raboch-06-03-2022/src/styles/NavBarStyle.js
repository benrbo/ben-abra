import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    navbar: {
      padding: "16px",
      background: "#1e8cba",
    },
    container: {
      background: "#1e8cba",
      display: "flex",
      justifyContent: "space-between"
    },
    active: {
      backgroundColor: "#f3f3f3",
      color: 'black',
      borderRadius: "3px",
      padding: "8px",
    },
    link: {
      textDecoration: "none",
      [theme.breakpoints.up('sm')]: {
        marginLeft: "1rem",
        color: "black",
        padding: "8px",
      },
      [theme.breakpoints.down('xs')]: {
        color: "black",
      },
    },
    mobile: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      },
    },
    desktop: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    }
  }));

  export { useStyles };
  