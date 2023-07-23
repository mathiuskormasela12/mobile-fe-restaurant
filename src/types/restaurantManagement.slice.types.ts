// ========= Restaurant Management Slice Types

export interface IRestaurantManagementSliceStates {
  data: IRestaurantManagement[];
  loading: boolean;
  error: boolean;
}

export interface IGetRestaurantManagementApiResponse<T> {
  statusCode: number;
  message: string;
  data?: T | T[];
  errors: Record<string, string[]>;
}

export interface IRestaurantManagementRaw {
  id: string;
  table_code: string;
  reservations: IReservationRaw[];
}

export interface IReservationRaw {
  id: string;
  first_name: string;
  last_name?: string;
  email: string;
  phone_number: string;
}

export interface IRestaurantManagement {
  id: string;
  tableCode: string;
  reservations: IReservation[];
}

export interface IReservation {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
}
