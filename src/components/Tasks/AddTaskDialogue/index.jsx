import { TextField, Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as React from "react";

function AddTaskDialogue(props) {
  const { open, handleClose, handleAddTask } = props;
  const [state, setState] = React.useState({
    id: "",
    name: "",
    start: new Date(),
    end: new Date(),
    progress: 10,
    dependencies: ""
  });

  const close = () => {
    handleClose();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    handleAddTask(state);
    handleClose()
  };

  return (
    <Dialog onClose={close} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Add Item</DialogTitle>
      <form
        style={{
          padding: 32,
          display: "flex",
          flexDirection: "column",
          rowGap: 32
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          placeholder="name"
          type="name"
          name="name"
          onChange={handleChange}
        />
        <TextField
          placeholder="start"
          name="start"
          type="date"
          onChange={handleChange}
        />
        <TextField
          placeholder="end"
          name="end"
          type="date"
          onChange={handleChange}
        />
        <TextField
          placeholder="progress"
          type="number"
          name="progress"
          onChange={handleChange}
        />
        <TextField
          placeholder="dependencies"
          type="text"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
      <Button onClick={handleClose} className="space-around">
        Cancel
      </Button>
    </Dialog>
  );
}

export default AddTaskDialogue;
