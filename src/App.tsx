import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'react-locale-hoc';

import configureStore from './configureStore';

import locales from './helpers/locales';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const { store } = configureStore({});

const App: React.FC = () => (
    <Provider store={store}>
        <LocaleProvider strings={locales}>
            <Container>hello</Container>
        </LocaleProvider>
    </Provider>
);

export default App;
