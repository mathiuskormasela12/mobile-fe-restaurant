// ======== Button Types
// import all packages
import {PropsWithChildren} from 'react';

export interface IButtonProps extends PropsWithChildren {
  onPress: () => void;
}
