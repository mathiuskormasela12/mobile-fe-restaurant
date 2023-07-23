// ========== Services
// import all packages
import {api} from './http';

interface ICreateReservation {
  first_name: string;
  last_name?: string;
  email: string;
  phone_number: string;
  table_id: string[];
}

class Services {
  public static getTableAvailabilities() {
    return api.get('/api/v1/table-availability');
  }
  public static getRestaurantManagement() {
    return api.get('/api/v1/table-availability/reservation');
  }
  public static deleteReservation(reservationId: string) {
    return api.delete('/api/v1/reservation/' + reservationId);
  }
  public static createReservation(data: ICreateReservation) {
    return api.post('/api/v1/reservation', data);
  }
}

export default Services;
