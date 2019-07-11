import React from 'react';
import { connect } from 'react-redux';
import { localise, t } from 'react-locale-hoc';
import { Nullable } from 'redux-first-router';

import InitialHome from '../layouts/InitialHome';
import { RootState } from '../configureStore';

interface Props {
  kind: Nullable<string>;
  t: typeof t;
}

function HomeView(props: Props) {
  const { kind, t } = props;

  if (kind === 'pop') return <div>{t('message')}</div>;

  return <InitialHome />;
}

export default localise(
  connect(
    (state: RootState) => ({
      kind: state.location.kind,
    }),
    {}
  )(HomeView)
);
