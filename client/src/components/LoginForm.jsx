import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import styled from 'styled-components';

import Auth from '../utils/auth';

const FormStyles = styled.div`
.formContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
}
h2 {
  font-size: 8rem;
  color: var(--gold-1)
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
  .buttonContainer {
    margin-top: 20px;
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
          <h2>Secure Login</h2>
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
                      placeholder="Enter password"
                      value={formState.password}
                      onChange={handleChange}
                      required />
              </div>
              <div className='buttonContainer'>
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
