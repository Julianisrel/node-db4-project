
exports.seed = function(knex) {

  return knex('ingredients').insert([
    { name: 'water', quantity: 1, unit: "cups"},
    { name: 'top ramen', quantity: 1, unit: "packet"},
    { name: 'pasta', quantity: 1, unit: "packet" },
  ]);

};
