import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import styled from 'styled-components';

import Auth from '../utils/auth';

const FormStyles = styled.div`
.formContainer {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 400px;
}
h2 {
  font-size: 4rem;
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

const LoginForm = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

return (
  <FormStyles>
  <>
      <div className='formContainer'>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
              <div>
                  <label htmlFor="email">Email:</label>
                  <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      value={formState.email}
                      onChange={handleChange}
                      required />
              </div>
              <div>
                  <label htmlFor="password">Password:</label>
                  <input
                      type="password"
                      name="password"
                      placeholder="Your password should be longer than 5 characters"
                      value={formState.password}
                      onChange={handleChange}
                      required />
              </div>
              <div>
                  <button type="submit">Log In</button>
              </div>
          </form>
      </div>
      {error && (
          <div>
              {error.message}
          </div>
      )}
  </>
  </FormStyles>
)
  
};

export default LoginForm;
