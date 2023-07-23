// ========== Services
// import all packages
import {api} from './http';

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
}

export default Services;
