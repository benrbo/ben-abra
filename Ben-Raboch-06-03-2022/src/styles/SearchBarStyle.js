import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    searchContainer: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      margin: "4rem 0",
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      pointerEvents: "none",
      marginBottom: "8px"
    },
    inputContainer: {
      width: "420px", 
    }
  }));

  export { useStyles };