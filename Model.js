/**
 * Model is a class to wrap sequelize ORM methods and
 * expose basic crud operations.
 */
export default class Model{
  constructor(model, {hiddenFields}) {
    this.model = model;
    this.modelData = {};

    // set Hidden Fields
    this.hiddenFields = hiddenFields || [];
  }

  /**
   * Standarized getter for modelData
   */
  get modelData() {
    const ret = {};
    for(let key in Object.keys(this.modelData)) {
      if(this.hiddenFields.indexOf(key) === -1) {
        ret[key] = this.modelData[key];
      }
    }
    return ret;
  }

  create() {
    this.model.build(this.modelData);
  }
  save() {
    //do something
  }
}
