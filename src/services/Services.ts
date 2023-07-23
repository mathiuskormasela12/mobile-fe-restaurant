// ========== Services
// import all packages
import {api} from './http';

class Services {
  public static getTableAvailabilities() {
    return api.get('/api/v1/table-availability');
  }
}

export default Services;
