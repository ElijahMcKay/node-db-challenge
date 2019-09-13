
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: "Trip Split", project_description: "split tips", project_complete: true },
        { project_name: "Loganon", project_description: "spoof emails", project_complete: false },
        { project_name: "Twitter", project_description: "tweet things", project_complete: true },
      ]);
    });
};
