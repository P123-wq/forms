import React,{useState} from "react";
import { useEffect } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName]=useState('')
  const [enteredMail, setEnteredMail]=useState('')
// const [enteredNameIsValid,setEnteredNameIsValid]=useState(false)
const [enteredNameTouched,setEnteredNameTouched]=useState(false)
const [enteredMailTouched,setEnteredMailTouched]=useState(false)

const enteredNameIsValid=enteredName.trim()!==''
const enteredMailIsValid=enteredMail.includes('@');
const emailInputIsValid=!enteredMailIsValid && enteredMailTouched
const nameInputIsValid=!enteredNameIsValid && enteredNameTouched
const [formIsValid,setFormIsValid]=useState(false)
useEffect(()=>{
if(enteredNameIsValid && enteredMailIsValid){
  setFormIsValid(true)
}
else{
  setFormIsValid(false)
}
},[enteredNameIsValid,enteredMailIsValid])

  const nameInputChangeHandler=(e)=>{
    setEnteredName(e.target.value)
    
    // if(e.target.value.trim()!==''){
    //   setEnteredNameIsValid(true)
      
      
    // }

  }
  const emailInputChangeHandler=(e)=>{
    setEnteredMail(e.target.value)
  }

  const nameInputBlurHandler=(e)=>{
    setEnteredNameTouched(true)
    if(enteredName.trim()==='' ){
      // setEnteredNameIsValid(false)
      setEnteredNameTouched(true)
      
    }
    
  }
  const emailInputBlurHandler=(e)=>{
    setEnteredMailTouched(true)
    if(enteredMail.trim()===''){
      setEnteredMailTouched(true)
    }
  }
  const formSubmitHandler=(e)=>{
    e.preventDefault()
    setEnteredNameTouched(true)
    setEnteredMailTouched(true)
    // if(enteredName.trim()===''){
    //   setEnteredNameIsValid(false)
      
    //   return
    // }
    if(!enteredNameIsValid || !enteredMailIsValid){
      return
    }
    console.log(enteredName)
    console.log(enteredMail)
    // setEnteredNameIsValid(true)

    
    setEnteredName('')
    setEnteredNameTouched(false)
    setEnteredMail('')
    setEnteredMailTouched(false)
  }

  return (
    <form onSubmit={formSubmitHandler }>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
        
     
        {nameInputIsValid&&<p>Name must not be empty</p>}
       
      </div>
      <div className='form-control'>
        <label htmlFor='e-mail'>Your Mail</label>
        
        <input type='email' id='email' onChange={emailInputChangeHandler} value={enteredMail} onBlur={emailInputBlurHandler}/>
        
        
        
        {emailInputIsValid && <p>Email must include '@' symbol and must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
