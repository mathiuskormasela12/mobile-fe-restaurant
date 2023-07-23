// ========= Reservation Hooks Types

// import all types
import {ScreenNames} from '../../../types';

export type RootStackParamList = Record<
  ScreenNames[number],
  {tableId?: string}
>;

export interface IForm {
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
}
