const server = require("./src/server");
const { conn } = require("./src/db");
const port = process.env.PORT || 3000;
           //alter
conn.sync({ force: true}).then(() => {
    server.listen(port,"0.0.0.0", () => {
      console.log(`Server listening on port ${port}`,"0.0.0.0");
    })
    }).catch(error => console.error(error))
    