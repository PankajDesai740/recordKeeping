
import './App.css';
import Header from './components/Header';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
function App() {
  const [form, setForm] = useState({})
  const [data, setData] = useState([]);

  const addData = (e) => {
    setData([...data, form]);
    setForm(form);
   
  }

  const removeData = (index) => {
    let arr = data;
    arr.splice(index,1)
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />

      <div className='form'>
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(e) => setForm({...form,name: e.target.value})}
            id="outlined-basic"
            label="Name"
            variant="outlined" />

          <TextField
            value={form.email}
            onChange={(e) => setForm({...form,email: e.target.value})}
            id="outlined-basic"
            label="Email"
            variant="outlined" />

          <Button
            variant="contained"
            color='success'
            onClick={addData}
          >

            <AddTaskIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className='label'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className="label">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button
                    onClick={() => removeData(index)}
                    variant="contained"
                    color='error'
                    
                  >
                    <DeleteOutlineIcon/>
                    
                  </Button>
                </Stack>

              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
