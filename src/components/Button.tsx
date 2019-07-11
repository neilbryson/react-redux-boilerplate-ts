import React from 'react';

import { styled } from '../styles/theme';

interface Props {
  label: string;
  [otherProps: string]: unknown;
}

const defaultProps = {
  label: 'Button',
};

const Container = styled.button`
  border: none;
  background-color: ${props => props.theme.Button.BG_COLOR};
  height: 20px;
  border-radius: 3px;
  color: ${props => props.theme.Button.TEXT_COLOR};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.6;
  }
`;

const Button: React.FC<Props> = ({ label, ...other }) => <Container {...other}>{label}</Container>;

Button.defaultProps = defaultProps;

export default Button;
