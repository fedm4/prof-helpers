/**
 * Model is a class to wrap sequelize ORM methods and
 * expose basic crud operations.
 */
export default class Model{
  constructor(model, {db}) {
    this.setModel(model, db);
    this._modelData = {};

    // set Hidden Fields
    this.hiddenFields = this.hiddenFields || [];
  }


  async setModel(model) {
    this.model = await model(db);
    console.log(this.model);
  } 

  /**
   * Standarized getter for modelData
   */
  get modelData() {
    const ret = {};
    for(let key in Object.keys(this._modelData)) {
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
    this.modelData = await this.model.build(this.modelData);
  }
  save() {
    //do something
  }
}
