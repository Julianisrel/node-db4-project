exports.up = function(knex) {
    return knex.schema
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // Creates the recipes table
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('recipes', tbl => {
          tbl.increments()
          tbl.string('name', 128)
              .notNull()
      })
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // Creates the ingredients table
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('ingredients', tbl => {
          tbl.increments()
          tbl.string('name', 128)
              .notNull()
          tbl.float('quantity')
          tbl.string('unit', 32)
      })
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // Creates Steps Table
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('steps', tbl => {
          tbl.increments()
          tbl.integer('step')
              .notNull()
          tbl.string('instruction')
              .notNull()
      })
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // Creates the recipes and ingredients table
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('recipe_ingredients', tbl => {
          tbl.increments()
          tbl.integer('recipe_id')
              .unsigned()
              .notNull()
              .references('id')
              .inTable('recipes')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT');
          tbl.integer('ingredient_id')
              .unsigned()
              .notNull()
              .references('id')
              .inTable('ingredients')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')

      })
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // Creates the recipe steps table
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('recipe_steps', tbl => {
          tbl.increments()
          tbl.integer('recipe_id')
              .unsigned()
              .notNull()
              .references('id')
              .inTable('recipes')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
          tbl.integer('step_id')
              .unsigned()
              .notNull()
              .references('id')
              .inTable('steps')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
      })
  };

  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // Rollsback the migration
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('recipe_steps')
          .dropTableIfExists('recipe_ingredients')
          .dropTableIfExists('steps')
          .dropTableIfExists('ingredients')
          .dropTableIfExists('recipes')

  };
