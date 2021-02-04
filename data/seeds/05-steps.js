exports.seed = function(knex) {

  return knex('steps').insert([
    { step: 1, instruction:'pour water into cup' },
    { step: 1, instruction:'pour water into pot' },
    { step: 2, instruction:'add rice' },
    { step: 3, instruction:'cook rice' },
    { step: 1, instruction:'pour water into pot' },
    { step: 2, instruction:'add noodles' },
    { step: 3, instruction:'cook pasta' }
  ]);

};
