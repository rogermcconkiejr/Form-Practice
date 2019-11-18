import React, {useState} from 'react';
import FormComp from './components/FormComp';

import './App.css';

function App() {
  const [userObject, setUserObject] = useState({username:"", password:""});
  
  const changeHandler = event => {
    setUserObject({...userObject, [event.target.name]: event.target.value});
  }
  const handleSubmit = event =>{
    event.preventDefault();
    console.log(userObject)
  }
  return (
    <div className="App">
      <h1>Hello from React.</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
        Username:
        <input type="text"
          name="username" 
          onChange = {changeHandler} />
        </label>
        <label>
          Password:
          <input type="text"
          name="password"
          onChange = {changeHandler} />
        </label>
        <button>Submit!</button>
      </form>
      <FormComp />
    </div>
  );
}

export default App;
