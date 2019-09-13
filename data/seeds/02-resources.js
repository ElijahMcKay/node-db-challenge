
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: "Jim", resource_description: "Project Manager" },	
        { resource_name: "Sarah", resource_description: "Frontend Machine" },	
        { resource_name: "Dave", resource_description: "SQL Master" },
      
        { resource_name: "SQL", resource_description: "database" },	
        { resource_name: "React", resource_description: "frontend" },	
        { resource_name: "Redux", resource_description: "state management" },
            
        { resource_name: "Room 1", resource_description: "office" },	
        { resource_name: "Room 2", resource_description: "lunchroom" },
        { resource_name: "Room 3", resource_description: "bathroom" }
      ]);
    });
};
