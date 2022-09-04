import User from "./db/person";
import sequelizeConnection from "./db/config"
try {
   
  const jane =   User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20),
  });

console.log(jane);
} catch (e) {
  console.log(e)
}