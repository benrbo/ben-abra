import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "4rem",
      width: "100%"
    },
    link: {
      textDecoration: "none",
      margin: "1rem",
      display: "flex",
      flex: "1 1 0",
      maxWidth: "360px",
      minWidth: "300px"
    }
  }));

  export { useStyles };
