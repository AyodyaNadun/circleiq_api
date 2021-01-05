module.exports = {
  async up(db, client) {
    await db.collection('users').insertOne({
      name : "Admin",
      location : "Colombo",
      address : "No 07",
      contact : "0711110201",
      __v: 0
    }, {});
  },

  async down(db, client) {}
};
