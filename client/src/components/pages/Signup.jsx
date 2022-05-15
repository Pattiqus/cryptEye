import React from 'react'
import SignUpForm from '../SignUpForm'
import styled from 'styled-components'
import Logo from '../Logo'

const SignUppageStyles = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
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
