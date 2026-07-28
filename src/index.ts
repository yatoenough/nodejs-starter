import { z } from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.email(),
});

type User = z.infer<typeof UserSchema>;

function greet(user: User) {
  console.log(`Hello, ${user.name} (${user.email})!`);
}

const parsedUser = UserSchema.parse({
  id: 1,
  name: "Demo",
  email: "dmeouser@example.com",
});

greet(parsedUser);
