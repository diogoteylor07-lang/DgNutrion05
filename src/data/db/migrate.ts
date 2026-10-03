import type { SQLiteDatabase } from "expo-sqlite";

export async function migrateDb(db: SQLiteDatabase) {
  await db.execAsync("PRAGMA foreign_keys = ON;");
  await db.execAsync("PRAGMA journal_mode = WAL;");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS app_meta (
      key TEXT PRIMARY KEY NOT NULL,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS profiles (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT,
      sex TEXT,
      birth_date TEXT,
      height_cm REAL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS nutrition_goals (
      id TEXT PRIMARY KEY NOT NULL,
      profile_id TEXT NOT NULL,
      calories_kcal REAL,
      protein_g REAL,
      carbs_g REAL,
      fat_g REAL,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS foods (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      brand TEXT,
      source TEXT NOT NULL,
      serving_basis TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS food_nutrients (
      food_id TEXT PRIMARY KEY NOT NULL,
      calories_kcal REAL NOT NULL,
      protein_g REAL NOT NULL,
      carbs_g REAL NOT NULL,
      fat_g REAL NOT NULL,
      fiber_g REAL
    );

    CREATE TABLE IF NOT EXISTS diary_entries (
      id TEXT PRIMARY KEY NOT NULL,
      local_date TEXT NOT NULL,
      meal_type TEXT NOT NULL,
      food_name_snapshot TEXT NOT NULL,
      serving_basis_snapshot TEXT NOT NULL,
      amount_g REAL NOT NULL,
      calories_kcal_snapshot REAL NOT NULL,
      protein_g_snapshot REAL NOT NULL,
      carbs_g_snapshot REAL NOT NULL,
      fat_g_snapshot REAL NOT NULL,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS weight_records (
      id TEXT PRIMARY KEY NOT NULL,
      measured_at INTEGER NOT NULL,
      weight_kg REAL NOT NULL,
      source TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS water_records (
      id TEXT PRIMARY KEY NOT NULL,
      local_date TEXT NOT NULL,
      amount_ml INTEGER NOT NULL,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS energy_daily (
      local_date TEXT PRIMARY KEY NOT NULL,
      bmr_kcal REAL,
      active_imported_kcal REAL,
      active_manual_kcal REAL,
      reported_total_kcal REAL,
      effective_total_kcal REAL,
      method TEXT NOT NULL
    );

    CREATE VIRTUAL TABLE IF NOT EXISTS foods_fts USING fts5(
      food_id UNINDEXED,
      name,
      brand
    );

    INSERT OR IGNORE INTO app_meta(key, value)
      VALUES ('schema_version', '1');
    INSERT OR IGNORE INTO app_meta(key, value)
      VALUES ('app_name', 'DgNutrion05');
    INSERT OR IGNORE INTO app_meta(key, value)
      VALUES ('locale', 'pt-BR');
  `);
}
