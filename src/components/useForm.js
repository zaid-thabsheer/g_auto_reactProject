import {useState,useEffect} from 'react';


import React from 'react'

function useForm(validate) {
   
const [values,setValue]=useState({
email:'',
password:''
})

const [errors,setErrors]=useState({})

const handleChange=e=>{
    setValue({
        ...values,
        [e.target.name]:e.target.value
    })
}

const handleSubmit=e=>{
    e.preventDefault()

    setErrors(validate(values));
    console.log(values);

    
}


return {handleChange,values,handleSubmit,errors}

}

export default useForm