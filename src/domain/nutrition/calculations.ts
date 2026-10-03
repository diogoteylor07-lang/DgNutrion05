import type { EnergyDay, EnergyMethod, NutritionValues } from "./types";

export type Sex = "male" | "female";

export function proportionalNutrition(
  base: NutritionValues,
  baseAmount: number,
  consumedAmount: number
): NutritionValues {
  if (baseAmount <= 0) throw new Error("baseAmount must be greater than zero");
  const factor = consumedAmount / baseAmount;

  return {
    caloriesKcal: base.caloriesKcal * factor,
    proteinG: base.proteinG * factor,
    carbsG: base.carbsG * factor,
    fatG: base.fatG * factor,
    ...(base.fiberG === undefined ? {} : { fiberG: base.fiberG * factor })
  };
}

export function mifflinStJeor(
  weightKg: number,
  heightCm: number,
  ageYears: number,
  sex: Sex
): number {
  const sexOffset = sex === "male" ? 5 : -161;
  return 10 * weightKg + 6.25 * heightCm - 5 * ageYears + sexOffset;
}

export function harrisBenedict(
  weightKg: number,
  heightCm: number,
  ageYears: number,
  sex: Sex
): number {
  if (sex === "male") {
    return 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * ageYears;
  }
  return 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * ageYears;
}

export function katchMcArdle(weightKg: number, bodyFatPercent: number): number {
  const leanMassKg = weightKg * (1 - bodyFatPercent / 100);
  return 370 + 21.6 * leanMassKg;
}

export function effectiveEnergy(day: EnergyDay): number {
  switch (day.method) {
    case "bmr_plus_active":
      if (day.activeKcal === undefined) {
        throw new Error("Active calories are required for this method");
      }
      return day.bmrKcal + day.activeKcal;
    case "reported_total":
      if (day.reportedTotalKcal === undefined) {
        throw new Error("Reported total is required for this method");
      }
      return day.reportedTotalKcal;
    case "activity_factor":
      if (day.activityFactor === undefined) {
        throw new Error("Activity factor is required for this method");
      }
      return day.bmrKcal * day.activityFactor;
    case "manual_total":
      if (day.manualTotalKcal === undefined) {
        throw new Error("Manual total is required for this method");
      }
      return day.manualTotalKcal;
  }
}

export function calorieBalance(consumedKcal: number, expenditureKcal: number): number {
  return expenditureKcal - consumedKcal;
}

export function macroCalories(values: NutritionValues) {
  return {
    protein: values.proteinG * 4,
    carbs: values.carbsG * 4,
    fat: values.fatG * 9
  };
}

export function roundForDisplay(value: number, decimals = 0): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
