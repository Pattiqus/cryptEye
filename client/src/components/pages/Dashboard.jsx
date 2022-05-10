import React from 'react'
import Chart from '../Chart.jsx'
import PnlTable from '../PnlTable.jsx'
import WelcomeTitle from '../welcomeTitle'

export default function Dashboard() {

  return (
    <div>
      <WelcomeTitle/>
      <Chart/>
      <PnlTable/>
    </div>
  )
}
