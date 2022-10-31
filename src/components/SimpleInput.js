import React,{useState} from "react";
import { useEffect } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName]=useState('')
// const [enteredNameIsValid,setEnteredNameIsValid]=useState(false)
const [enteredNameTouched,setEnteredNameTouched]=useState(false)
const enteredNameIsValid=enteredName.trim()!==''
const [formIsValid,setFormIsValid]=useState(false)
useEffect(()=>{
if(enteredNameIsValid){
  setFormIsValid(true)
}
else{
  setFormIsValid(false)
}
},[enteredNameIsValid])

  const nameInputChangeHandler=(e)=>{
    setEnteredName(e.target.value)
    // if(e.target.value.trim()!==''){
    //   setEnteredNameIsValid(true)
      
      
    // }

  }
  const nameInputBlurHandler=(e)=>{
    setEnteredNameTouched(true)
    if(enteredName.trim()===''){
      // setEnteredNameIsValid(false)
      setEnteredNameTouched(true)
      
    }
  }
  const formSubmitHandler=(e)=>{
    e.preventDefault()
    setEnteredNameTouched(true)
    // if(enteredName.trim()===''){
    //   setEnteredNameIsValid(false)
      
    //   return
    // }
    if(!enteredNameIsValid){
      return
    }
    console.log(enteredName)
    // setEnteredNameIsValid(true)

    
    setEnteredName('')
    setEnteredNameTouched(false)
  }

  return (
    <form onSubmit={formSubmitHandler }>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
        {!enteredNameIsValid && enteredNameTouched&&<p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
