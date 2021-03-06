/**
 * Model is a class to wrap sequelize ORM methods and
 * expose basic crud operations.
 */
export default class Model{
  constructor(model, options) {
    this.model = model;
    this._modelData = {};

    // set Hidden Fields
    this.hiddenFields = this.hiddenFields || [];
  }

  /**
   * Standarized getter for modelData
   */
  get modelData() {
    const ret = {};
    for(let key of Object.keys(this._modelData)) {
      if(this.hiddenFields.indexOf(key) === -1) {
        ret[key] = this._modelData[key];
      }
    }
    return ret;
  }

  set modelData(data) {
    this._modelData = data;   
  }

  async create() {
    this.modelData = await this.model.build(this._modelData);
  }
  save() {
    //do something
  }
}
