import React from 'react'
import Chart from '../Chart.jsx'
import PnlTableTEST from '../PnlTableTEST.jsx'
import WelcomeTitle from '../welcomeTitle'

import {QueryClientProvider, QueryClient } from 'react-query';

export default function Dashboard() {

  const queryClient = new QueryClient();
  return (
  <QueryClientProvider client={queryClient}>  
    <div>
      <WelcomeTitle/>
      <Chart/>
      <PnlTableTEST/>
    </div>
  </QueryClientProvider>
  )
}
