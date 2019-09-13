
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: "home page", task_notes: "do it", task_complete: false, project_id: 1 },
        { task_description: "about page", task_notes: "do it", task_complete: false, project_id: 1 },
        { task_description: "contact page", task_notes: "do it", task_complete: false, project_id: 1 },
      
        { task_description: "build database", task_notes: "do it", task_complete: false, project_id: 2 },
        { task_description: "build frontend", task_notes: "do it", task_complete: true, project_id: 2 },
        { task_description: "build backend", task_notes: "do it", task_complete: false, project_id: 2 },
      
        { task_description: "tweet feed", task_notes: "do it", task_complete: false, project_id: 3 },
        { task_description: "search bar", task_notes: "do it", task_complete: false, project_id: 3 },
        { task_description: "direct messages", task_notes: "do it", task_complete: false, project_id: 3 },
      ]);
    });
};
