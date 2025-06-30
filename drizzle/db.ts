// import the neon serverless client for PostSQL
import { neon } from "@neondatabase/serverless";

// import drizzle's neon HTTP driver for ORM support
import { drizzle } from "drizzle-orm/neon-http";

// import your databse schema definition (e.g., tables) from the local schema file
import * as schema from "./schema";

// intitialize the neon client using the DATBASE_URL from your environment variables
const sql = neon(process.env.DATABASE_URL!);

// create and export the drizzle ORM instance, with the neon client and schema for type-safe queries
export const db = drizzle(sql, { schema });
