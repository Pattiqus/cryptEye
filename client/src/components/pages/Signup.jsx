import React from 'react'
import SignUpForm from '../signUpForm'
import styled from 'styled-components'
import Logo from '../Logo'

const SignUppageStyles = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default function Signup() {
  return (
    <div>
      <SignUppageStyles>
        <Logo/>
        <SignUpForm/>
      </SignUppageStyles>
    </div>
  )
}
