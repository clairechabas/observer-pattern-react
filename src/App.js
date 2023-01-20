import observable from "./Observable";
import { Button, FormControlLabel, Switch } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function handleClick() {
  observable.notify("User clicked the button!");
}
function handleToggle() {
  observable.notify("User toggled the switch!");
}
function logger(data) {
  console.log(`${Date.now()} ${data}`);
}
function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        poition: "relative",
        top: "50%",
      }}
    >
      <Button variant="contained" onClick={handleClick}>
        Click me!
      </Button>
      <FormControlLabel
        style={{ marginTop: "2rem" }}
        control={<Switch name="" onChange={handleToggle} />}
        label="Toggle me!"
      />
      <ToastContainer />
    </div>
  );
}
