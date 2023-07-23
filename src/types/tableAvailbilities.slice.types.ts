// ========= Counter Slice Types

export interface ITableAvailabilitiesSliceStates {
  data: {
    id: string;
    tableCode: string;
    location: string;
    isAvailable: boolean;
  }[];
  loading: boolean;
  error: boolean;
}

export interface IGetTableAvailabilitiesApiResponse<T> {
  statusCode: number;
  message: string;
  data?: T | T[];
  errors: Record<string, string[]>;
}

export interface ITableAvailabilitiesRaw {
  id: string;
  table_code: string;
  location: string;
  is_available: boolean;
}
