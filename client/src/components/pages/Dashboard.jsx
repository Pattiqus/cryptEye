import React from 'react'
import Chart from '../Chart.jsx'
import PnlTableTEST from '../PnlTableTEST.jsx'
import WelcomeTitle from '../welcomeTitle'

export default function Dashboard() {

  return (
    <div>
      <WelcomeTitle/>
      <Chart/>
      <PnlTableTEST/>
    </div>
  )
}
