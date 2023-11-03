const Service = require('./service');

class Activity extends Service {
  fixedCost;

  variableCost;

  assistance;

  instructor;

  constructor(name, fixedCost = 0, variableCost = 0, assistance = 0) {
    super(name);
    this.fixedCost = fixedCost;
    this.variableCost = variableCost;
    this.assistance = assistance;
    this.instructor = null;
  }

  ledBy(instructor) {
    if (instructor.constructor.name === 'Instructor') {
      this.instructor = instructor;
    }
  }

  calculateCost() {
    return this.fixedCost + this.variableCost * this.assistance;
  }
}

module.exports = Activity;
