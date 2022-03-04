import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
      flex: "1 1 0"
    },
    image: {
      height: "70px",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      display: "flex",
      alignItems: "center",
      padding: 0
    }
  }));

  export { useStyles };
