import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
    try {
        await migrate(db, { migrationsFolder: "src/db/migrations" });
        console.log("migrations complete");
    } catch (err) {
        console.error("Error during migration: ", err);
        process.exit(1);
    }
};

main();