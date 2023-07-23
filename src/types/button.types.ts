// ======== Button Types
// import all packages
import {PropsWithChildren} from 'react';

export interface IButtonProps extends PropsWithChildren {
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'danger';
  marginTop?: number;
}
