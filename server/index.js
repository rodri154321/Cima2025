const server = require("./src/server");
const { conn } = require("./src/db");
const PORT = 3001;
           //alter
conn.sync({ force: true}).then(() => {
    server.listen(PORT,"0.0.0.0", () => {
      console.log(`Server listening on port ${PORT}`,"0.0.0.0");
    })
    }).catch(error => console.error(error))
    