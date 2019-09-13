
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments(); 
      tbl.string('project_name')
        .notNullable()
      tbl.string('project_description')
      tbl.boolean('project_complete').defaultTo(false)
        .notNullable()
    })
    .createTable('resources', tbl => {  // resources table 
        tbl.increments()
        tbl.string('resource_name')
            .notNullable()
        tbl.string('resource_description')
            .notNullable(); 
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned() 
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('task_description')
            .notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_complete').defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
