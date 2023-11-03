const Activity = require('./activity');

class Instructor {
  name;

  #basicSalary;

  ledActivities;

  constructor(name, basicSalary = 500) {
    this.name = name;
    this.#basicSalary = basicSalary;
    this.ledActivities = [];
  }

  get salary() {
    return this.#basicSalary;
  }

  lead(activity) {
    if (activity instanceof Activity) {
      this.ledActivities.push(activity);
      activity.ledBy(this);
    }
  }
}

module.exports = Instructor;
