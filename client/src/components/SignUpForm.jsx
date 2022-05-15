import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import styled from 'styled-components';


const FormStyles = styled.div`
h2 {
  font-size: 4rem;
}
.formContainer {
  margin-bottom: 100px;
}
width: 50%;
  .form-group {
    width: 50%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  .text-warning {
    color: red;
  }
  button[type='submit'] {
    margin-top: 20px;
    background-color: var(--black);
    color: var(--gold-1);
    border-color: var(--gold-1);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: solid;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
    background-color: var(--gold-1);
    color: var(--black);
  }
  }
`



const SignUpForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);


  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    console.log('handform')
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      if (!error && data.addUser) {
      Auth.login(data.addUser.token);}
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormStyles>
    <div className='formContainer'>
        <form onSubmit={handleFormSubmit}>
          <h2>Join the movement</h2>
          <label>Username</label>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <label>Email</label>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label>Password</label>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  style={{ cursor: 'pointer' }}
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
              </form>

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
    </div>
    </FormStyles>
  );
};

export default SignUpForm;
