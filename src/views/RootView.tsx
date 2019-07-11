import React from 'react';
import { connect } from 'react-redux';

import { route } from '../modules/routing';

import { RootState } from '../configureStore';

import HomeView from './HomeView';

const RootView = ({ location }: RootState) => {
  switch (location.type) {
    case route('HOME'):
      return <HomeView />;
    default:
      return null;
  }
};

export default connect(
  (state: RootState) => ({
    location: state.location,
  }),
  {}
)(RootView);
