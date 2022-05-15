import React from 'react'
import styled from 'styled-components'
import LoginForm from '../LoginForm'
import Logo from '../Logo'

const HomepageStyles = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px
`

export default function Home() {
  return (
    <div>
      <HomepageStyles>
        <Logo/>
        <LoginForm/>
      </HomepageStyles>
    </div>
  )
}
