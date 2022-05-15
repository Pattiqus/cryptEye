import React from 'react';
import Chart from '../Chart';
import PnlTableTEST from '../PnlTableTEST';
import WelcomeTitle from '../welcomeTitle';
import styled from 'styled-components';

import {QueryClientProvider, QueryClient } from 'react-query';

const DashBoardStyles = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export default function Dashboard() {

  const queryClient = new QueryClient();
  return (
  <QueryClientProvider client={queryClient}>
    <DashBoardStyles>  
    <div>
      <WelcomeTitle/>
      <Chart/>
      <PnlTableTEST/>
    </div>
    </DashBoardStyles>
  </QueryClientProvider>
  )
}
