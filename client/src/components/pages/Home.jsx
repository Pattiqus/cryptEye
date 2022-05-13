import React from 'react'
import styled from 'styled-components'
import LoginForm from '../LoginForm'

const HomepageStyles = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`

export default function Home() {
  return (
    <div>
      <HomepageStyles>
        <LoginForm/>
      </HomepageStyles>
    </div>
  )
}
