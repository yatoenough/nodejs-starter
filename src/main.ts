import { type User, UserSchema } from "@/user.js";

function greet(user: User) {
  console.log(`Hello, ${user.name} (${user.email})!`);
}

const parsedUser = UserSchema.parse({
  id: 1,
  name: "Demo",
  email: "demouser@example.com",
});

greet(parsedUser);
