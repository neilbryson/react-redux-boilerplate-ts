import emotionStyled, { CreateStyled } from '@emotion/styled';

import defaultTheme from './default';

const theme = {
  default: defaultTheme,
};

export const styled = emotionStyled as CreateStyled<typeof theme.default>;

export default theme;
