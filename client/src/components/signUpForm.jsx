import React, { useState } from 'react';


import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import styled from 'styled-components';

const FormStyles = styled.form`
.formContainer {
    justify-content: center;
    margin-top: 300px;
}
`

const SignUpForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [username, setUserName] = useState()
  const handleChange = (event) => {
      console.log('handleChange');
      setUserName(username);
    const { name, value } = event.target;
    console.log(name, value);
    const temp = {...formState,[name]: value}
    console.log(temp);
    setFormState(
      temp
    );
    console.log('formState', formState)
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormStyles>
    <div className='formContainer'>
        {formState.name}
        {console.log('formState', formState)}
        <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={username}
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
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
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
