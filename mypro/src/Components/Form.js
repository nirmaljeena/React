import React,{useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../App.css';
const Form = ({onSubmit}) => {
    const [username, setUsername] = useState('')
    const onChangeHandler = (event)=>
    {
      setUsername(event.target.value)
    }
    const  handleSubmit = event => {
      event.preventDefault()
  
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(resp => {
          onSubmit(resp.data)
          setUsername('')
        })
    }
    return (
      <form onSubmit={handleSubmit} id="form">
        <input id="input"
          type="text"
          value={username}
          onChange={onChangeHandler}
          placeholder="GitHub username"
          required
        />
        <button type="submit" id='button' >Compare</button>
      </form>
    )
  }

  Form.propTypes = {
    onSubmit:PropTypes.func.isRequired
  }
  export default Form;