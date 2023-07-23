// ========= Badge Types
// import all packages
import {PropsWithChildren} from 'react';

export interface IBadgeProps extends PropsWithChildren {
  variant: 'primary' | 'danger';
  onPress?: () => void;
}
