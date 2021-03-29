import React, { CSSProperties } from "react";
import TextField from "@material-ui/core/TextField";

function AdminForm() {

  const mainStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
  return (
    <form action="" style={mainStyle}>
      <h1>HEEEEJ</h1>
      <div>
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
        />
      </div>
    </form>
  );
}

export default AdminForm;
