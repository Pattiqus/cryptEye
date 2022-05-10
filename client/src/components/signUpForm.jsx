import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import styled from 'styled-components';


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

const Container = styled.div`
    justify-content: center;
    margin-top: 300px;
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
    <Container>
    <div className='formContainer'>
        <FormStyles onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
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
              </FormStyles>

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
    </div>
    </Container>
  );
};

export default SignUpForm;
