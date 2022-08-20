import React from 'react'
import '../Login/login.scss'
import {Box,TextField,Typography} from '@mui/material'
import useForm from '../useForm'
import validate from '../validationInfo';

function Login() {
    const{handleChange,values,handleSubmit,errors}=useForm(validate);

  return (
    <div>
    <form  onSubmit={handleSubmit}>
        <Box display="flex"  flexDirection={"column"} className='box'>
            <Typography><h2>Login</h2></Typography>
            {errors.email && <p>{errors.email}</p>}
            <TextField  
             className='field'
              margin='normal'
               id="outlined-basic"
                label="Email" 
                name='email'
                variant="outlined"
               type="email"
                value={values.email}
                onChange={handleChange}
                />
                
                {errors.password&&<p>{errors.password}</p>}  
            <TextField 
            className='field'
             margin='normal' 
             id="outlined-basic"
              label="Password" 
              name='password'
              type='password'
              variant="outlined" 
              value={values.password}
                onChange={handleChange}
            
              />
              
          
              
             
           
            <button  className='btn'  variant="contained" >Login</button>
           <span className='sign-up'> Create new Account?<a href='#'>Sign up</a></span>
        </Box>
        
    </form>
   
    </div>
  )
}

export default Login