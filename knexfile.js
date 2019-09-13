// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'  //you may also want to add this migrations directory 
    },
    seeds: {
      directory: './data/seeds'  //you may also want to add this migrations directory 
    },
    pool: {
      afterCreate: (conn, done) => {
          //runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    }
  },

}


