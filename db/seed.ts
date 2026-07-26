import { db } from "./index";
import { users } from "./schema";

async function seed() {
  await db.insert(users).values([
    { id: crypto.randomUUID(), name: "Alice", email: "alice@example.com" },
    { id: crypto.randomUUID(), name: "Bob", email: "bob@example.com" },
  ]);

  console.log("Seeded!");
}

seed().catch(console.error);
