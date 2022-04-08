import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: "1800px",
    },
    infoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
      color: "red"
    },
    scrollContainer: {
      [theme.breakpoints.down('sm')]: {
        position: "relative",
        width: "100%",
        "&::after": {
          content: "''",
          display: "flex",
          width: "60px",
          height: "calc(100% - 20px)",
          right: 0,
          position: "absolute",
          zIndex: 9999999,
          marginLeft: "auto",
          top: 0,
          background: "linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .7) 40%, #fff 70%)",
        }
      }
    },
    forecast: {
      display: "flex",
      alignItems: "center",
      padding: "1rem",
      overflow: "auto",
      whiteSpace: "nowrap",
      flexGrow: 1,
      "::-webkit-scrollbar": {
        width: "5px",
        height: "5px"
      }
    },
    currentConditions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "3rem 0"
    },
    root: {
      padding: "2rem",
      margin: "3rem 0",
      background: "rgba(255,255,255,0.5)",
      color: '#1e8cba'
    },
  
  }));

  export { useStyles };