import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import FileUploader from './FileUploader';


   

function Rec() {
const onSelectFileHandler = (e) => {
  console.log(e.target.files[0]);
}

const onDeleteFileHandler = () => {

}
        return (
            <div className="App">
            <div className='app-form'>
              <Grid container spacing={2}>
                <Grid item xs={6} p={2}>
                  <label>First Name</label>
                  <TextField style={{ padding: "0.25rem" }} />
                </Grid>
                <Grid item xs={6} p={2}>
                  <label>Last Name</label>
                  <TextField style={{ padding: "0.25rem" }} />
                </Grid>
                <Grid item xs={6} p={2}>
                  <label>Address</label>
                  <TextField />
                </Grid>
                <Grid item xs={6} p={2}>
                  <label>Age</label>
                  <TextField />
                </Grid>
                <Grid item xs={6} p={2}>
                  <label>Document</label>
                  {/* <input type='file' onChange={onSelectFileHandler} /> */}
                  {/* <TextField type='file' onChange={onSelectFileHandler} /> */}
                  <FileUploader onSelectFile={onSelectFileHandler}
                      onDeleteFile={onDeleteFileHandler} />
                </Grid>
                <Grid item xs={12} p={2} style={{ textAlign:'end' }}>
                  <Button variant="outlined" style={{ marginLeft: "1rem"}}>Cancel</Button>
                  <Button variant="contained" style={{ marginLeft: "1rem"}}>Save</Button>
                </Grid>
              </Grid>
            </div>
          </div>
        );
    }

export default Rec;