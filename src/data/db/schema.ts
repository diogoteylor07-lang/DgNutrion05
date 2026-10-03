import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  id: text("id").primaryKey(),
  name: text("name"),
  sex: text("sex"),
  birthDate: text("birth_date"),
  heightCm: real("height_cm"),
  createdAt: integer("created_at", { mode: "number" }).notNull(),
  updatedAt: integer("updated_at", { mode: "number" }).notNull()
});

export const nutritionGoals = sqliteTable("nutrition_goals", {
  id: text("id").primaryKey(),
  profileId: text("profile_id").notNull(),
  caloriesKcal: real("calories_kcal"),
  proteinG: real("protein_g"),
  carbsG: real("carbs_g"),
  fatG: real("fat_g"),
  createdAt: integer("created_at", { mode: "number" }).notNull()
});

export const foods = sqliteTable("foods", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  brand: text("brand"),
  source: text("source").notNull(),
  servingBasis: text("serving_basis").notNull(),
  createdAt: integer("created_at", { mode: "number" }).notNull(),
  updatedAt: integer("updated_at", { mode: "number" }).notNull()
});

export const foodNutrients = sqliteTable("food_nutrients", {
  foodId: text("food_id").primaryKey(),
  caloriesKcal: real("calories_kcal").notNull(),
  proteinG: real("protein_g").notNull(),
  carbsG: real("carbs_g").notNull(),
  fatG: real("fat_g").notNull(),
  fiberG: real("fiber_g")
});

export const diaryEntries = sqliteTable("diary_entries", {
  id: text("id").primaryKey(),
  localDate: text("local_date").notNull(),
  mealType: text("meal_type").notNull(),
  foodNameSnapshot: text("food_name_snapshot").notNull(),
  servingBasisSnapshot: text("serving_basis_snapshot").notNull(),
  amountG: real("amount_g").notNull(),
  caloriesKcalSnapshot: real("calories_kcal_snapshot").notNull(),
  proteinGSnapshot: real("protein_g_snapshot").notNull(),
  carbsGSnapshot: real("carbs_g_snapshot").notNull(),
  fatGSnapshot: real("fat_g_snapshot").notNull(),
  createdAt: integer("created_at", { mode: "number" }).notNull()
});

export const weightRecords = sqliteTable("weight_records", {
  id: text("id").primaryKey(),
  measuredAt: integer("measured_at", { mode: "number" }).notNull(),
  weightKg: real("weight_kg").notNull(),
  source: text("source").notNull()
});

export const waterRecords = sqliteTable("water_records", {
  id: text("id").primaryKey(),
  localDate: text("local_date").notNull(),
  amountMl: integer("amount_ml").notNull(),
  createdAt: integer("created_at", { mode: "number" }).notNull()
});

export const energyDaily = sqliteTable("energy_daily", {
  localDate: text("local_date").primaryKey(),
  bmrKcal: real("bmr_kcal"),
  activeImportedKcal: real("active_imported_kcal"),
  activeManualKcal: real("active_manual_kcal"),
  reportedTotalKcal: real("reported_total_kcal"),
  effectiveTotalKcal: real("effective_total_kcal"),
  method: text("method").notNull()
});
