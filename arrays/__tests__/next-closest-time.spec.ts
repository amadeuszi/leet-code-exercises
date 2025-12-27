import { nextClosestTime } from "../next-closest-time"

import { nextClosestTime as nextClosestTimeSimulation } from "../next-closest-time-simulation"

describe("nextClosestTime", () => {
  it("correct time for 19:34", () => {
    expect(nextClosestTime("19:34")).toBe("19:39")
  })

  it("correct time for simulation 19:34", () => {
    expect(nextClosestTimeSimulation("19:34")).toBe("19:39")
  })
})