export type NutritionValues = {
  caloriesKcal: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  fiberG?: number;
};

export type ServingBasis = "raw" | "cooked" | "as_sold" | "prepared";

export type EnergyMethod =
  | "bmr_plus_active"
  | "reported_total"
  | "activity_factor"
  | "manual_total";

export type EnergyDay = {
  bmrKcal: number;
  activeKcal?: number;
  reportedTotalKcal?: number;
  activityFactor?: number;
  manualTotalKcal?: number;
  method: EnergyMethod;
};
