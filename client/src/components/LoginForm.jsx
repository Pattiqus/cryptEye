import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import styled from 'styled-components';

import Auth from '../utils/auth';

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

  const FormStyles = styled.div`
    .formContainer {
      justify-content: center;
      margin-top: 300px;
    }
  `

return (
  <>
  <FormStyles>
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
  </FormStyles>
  </>
)
  
};

export default LoginForm;
