import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    padding: "0.5rem",
    margin: "1rem",
    width: "14rem",
    border: "none",
  },
});

function ButtonExample() {
  const classes = useStyles();
  return (
    <div>
      <h1>Buttons by Rovan</h1>
      <div>
      <Button variant="contained" className={classes.btn}>
        Button1
      </Button>
      </div>
      <div>
      <Button variant="contained" color="primary" className={classes.btn}>
        Button2
      </Button>
      </div>
      <div>
      <Button variant="outline" color="primary" className={classes.btn}>
        Button3
      </Button>
      </div>
    </div>
  )
}

export default ButtonExample;
