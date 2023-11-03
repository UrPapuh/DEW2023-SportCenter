class Service {
  name;

  ratings;

  constructor(name) {
    this.name = name;
    this.ratings = [];
  }

  /**
   * Propiedad calculada media rating
   */
  get rating() {
    if (this.ratings.length === 0) { return 0; }
    const accurate = (this.ratings.reduce((sum, rate) => sum + rate, 0) / this.ratings.length);
    return Number(accurate.toFixed(2));
  }

  giveRating(rate) {
    this.ratings.push(rate);
  }

  // calculateCost() {
  //   if (this.constructor.name === 'Facility') {
  //     return (this.maintenanceCost / 12);
  //   }
  //   if (this.constructor.name === 'Activity') {
  //     return this.fixedCost + this.variableCost * this.assistance;
  //   }
  //   return 0;
  // }
  calculateCost() { return 0; } // No implementado
}

module.exports = Service;
