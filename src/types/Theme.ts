export interface ButtonColors {
  BG_COLOR: string;
  TEXT_COLOR: string;
}

export interface AppColors {
  Button: ButtonColors;
}

export interface ThemeProps {
  theme: ThemeProps;
  [key: string]: unknown;
}
