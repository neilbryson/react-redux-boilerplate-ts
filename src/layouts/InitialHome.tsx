import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { localise, t } from 'react-locale-hoc';

import Button from '../components/Button';

import * as routeActions from '../modules/routing';

import { RootState } from '../configureStore';

interface Props {
  navigateTo: typeof routeActions.navigateTo;
  t: typeof t;
}

const Header = styled.div`
  font-weight: bold;
`;

const InitialHome: React.FC<Props> = ({ navigateTo, t }: Props) => {
  function onClick(): void {
    navigateTo('SUCCESS');
  }

  return (
    <>
      <Header>{t('it_works')}</Header>
      <div>{t('instructions')}</div>
      <Button label={t('click_me')} onClick={onClick} />
    </>
  );
};

export default localise(
  connect(
    (state: RootState) => ({
      location: state.location,
    }),
    {
      navigateTo: routeActions.navigateTo,
    }
  )(InitialHome)
);
