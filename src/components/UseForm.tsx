import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { redirect, useNavigate } from 'react-router-dom';
const UseForm = () => {
    const navigate=useNavigate();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (!name || !phoneNumber || !email) {
            alert('You must enter your details before accessing this page.');
            redirect('/');
        }
        else{
            e.preventDefault();
        // Save data to local storage
        localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));
        // Navigate to the second page
        // You can use Next.js router or any other navigation method
        navigate('/second');
        }
      };
  return (
    <form
        style={{margin:"10px 0px 0px 50px"}}   
        onSubmit={handleSubmit} 
    >
      <div style={{marginBottom:"20px"}}>
        <label htmlFor="name">Name:</label><br />
        <TextField
        type='text'
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        style={{width:"300px"}}
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div style={{marginBottom:"20px"}}>
        <label htmlFor="name">Phone:</label><br />
        <TextField
        hiddenLabel
        type='number'
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        style={{width:"300px"}}
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
        />
      </div>
      <div style={{marginBottom:"20px"}}>
        <label htmlFor="name">Email:</label><br />
        <TextField
        hiddenLabel
        type='email'
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        style={{width:"300px"}}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div style={{marginTop:"20px"}}>
        <Button variant="contained" type='submit'>Submit</Button>
      </div>
    </form>
  )
}

export default UseForm
