import React from 'react'
import SignUpForm from '../SignUpForm'
import styled from 'styled-components'

const SignUppageStyles = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`

export default function Signup() {
  return (
    <div>
      <SignUppageStyles>
        <SignUpForm/>
      </SignUppageStyles>
    </div>
  )
}
