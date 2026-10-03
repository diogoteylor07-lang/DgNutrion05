import {
  calorieBalance,
  effectiveEnergy,
  mifflinStJeor,
  proportionalNutrition
} from "../src/domain/nutrition/calculations";

describe("nutrition calculations", () => {
  it("calculates proportional nutrients without premature rounding", () => {
    const result = proportionalNutrition(
      { caloriesKcal: 200, proteinG: 20, carbsG: 10, fatG: 5 },
      100,
      150
    );

    expect(result.caloriesKcal).toBe(300);
    expect(result.proteinG).toBe(30);
    expect(result.carbsG).toBe(15);
    expect(result.fatG).toBe(7.5);
  });

  it("calculates Mifflin-St Jeor", () => {
    expect(mifflinStJeor(96, 188, 30, "male")).toBeCloseTo(2010);
  });

  it("does not double-count a reported total", () => {
    expect(
      effectiveEnergy({
        bmrKcal: 2000,
        activeKcal: 600,
        reportedTotalKcal: 2600,
        method: "reported_total"
      })
    ).toBe(2600);
  });

  it("calculates energy balance", () => {
    expect(calorieBalance(2000, 2500)).toBe(500);
  });
});
