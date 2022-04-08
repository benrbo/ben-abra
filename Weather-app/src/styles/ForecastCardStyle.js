import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      with: "560px",
      minWidth: "160px",
      flex: "1 1 0",
      "&:not(:last-child)": {
        marginRight: "1rem"
      }
    },
    content: {
      with: "100%",
      textAlign: "center"
    },
    container: {
      display: "flex",
      justifyContent: "center"
    },
    margin: {
      marginRight: "0.5rem",
    }
  });

  export { useStyles };