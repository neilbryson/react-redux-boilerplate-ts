import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'react-locale-hoc';

import { store } from './configureStore';

import RootView from './views/RootView';

import locales from './helpers/locales';

import themes from './styles/theme';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const App: React.FC = () => (
  <Provider store={store}>
    <LocaleProvider strings={locales}>
      <ThemeProvider theme={themes.default}>
        <Container>
          <RootView />
        </Container>
      </ThemeProvider>
    </LocaleProvider>
  </Provider>
);

export default App;
