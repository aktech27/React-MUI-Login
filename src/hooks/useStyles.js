import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: "lime",
    fontSize: 50,
  },
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(45deg, #3f5efb 0%, #fc466b 100%)",
  },
  loginContainer: {
    height: "500px",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(45deg, #00ffff 0%, #e6ffff 10%, #ffffff 90%,#00ffff 100% )",
  },
  loginForm: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  registerContainer: {
    minHeight: "500px",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(45deg, #00ffff 0%, #e6ffff 10%, #ffffff 90%,#00ffff 100% )",
  },
  registerButtons: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
  },
});

export default useStyles;
