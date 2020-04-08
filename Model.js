/**
 * Model is a class to wrap sequelize ORM methods and
 * expose basic crud operations.
 */
export default class Model{
  constructor(db) {
    super();
    this.table = table;
  }

  static init(data, table, sequelize) {
    return super.init(
      data,
      {
        tableName: table,
        sequelize
      }
    );
  }

  save() {
    //do something
  }
}
