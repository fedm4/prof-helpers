/**
 * Model is a class to wrap sequelize ORM methods and
 * expose basic crud operations.
 */
export default class Model{
  constructor(model) {
    this.model = model;
    this.modelData = {};
  }
  create() {
    this.model.build(this.modelData);
  }
  save() {
    //do something
  }
}
