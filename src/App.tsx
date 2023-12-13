import React from 'react';
import Router from 'Router';
import { GlobalStyles } from 'style/GlobalStyle';
import styled from 'styled-components';
import { HeaderHeight } from 'utils/constant';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppWrapper>
        <Router />
      </AppWrapper>
    </div>
  );
}
const AppWrapper = styled.main`
  margin-top: 4.375rem;
  height: calc(100vh - ${HeaderHeight});
`;
export default App;
