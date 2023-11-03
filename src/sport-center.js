const Service = require('./service');
const Facility = require('./facility');
const Activity = require('./activity');

class SportCenter {
  name;

  #services;

  membership; // Numero de miembros

  fee; // Tarifa

  constructor(name, fee = 0, membership = 0) {
    this.name = name;
    this.fee = fee;
    this.membership = membership;
    this.#services = [];
  }

  addService(...services) {
    services.forEach((service) => {
      if (service instanceof Service && !this.#services.includes(service)) {
        this.#services.push(service);
      }
    });
  }

  removeService(service) {
    const index = this.#services.indexOf(service);
    if (index >= 0) {
      this.#services.splice(index, 1);
    }
  }

  getServices() {
    return this.#services;
  }

  /**
   * Metodo que calcula los ingresos del centro deportivo
   * @returns ingresos
   */
  income() {
    return this.fee * this.membership;
  }

  getFacilities() {
    const facilities = this.#services.filter((service) => service instanceof Facility);
    return facilities || null;
  }

  getActivities() {
    const activities = this.#services.filter((service) => service instanceof Activity);
    return activities || null;
  }

  orderServicesBy(order) {
    if (order === 'name') {
      this.#services.sort((s1, s2) => {
        if (s1.name < s2.name) {
          return -1;
        }
        if (s1.name > s2.name) {
          return 1;
        }
        return 0;
      });
    }
    if (order === 'rating') {
      this.#services.sort((s1, s2) => {
        if (s1.rating > s2.rating) {
          return -1;
        }
        if (s1.rating < s2.rating) {
          return 1;
        }
        return 0;
      });
    }
  }
}

module.exports = SportCenter;
