import { User } from "./src/db/person.ts";
try {
  const jane =  User({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });

console.log(jane);
} catch (e) {
  console.log(e)
}