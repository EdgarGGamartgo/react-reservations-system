import { isScheduleConflict } from "./utils";

describe("isScheduleConflict", () => {
  it("returns [false] for an empty list", () => {
    expect(isScheduleConflict([])).toBe(false);
  });

  it("returns false for a non conflicting reservations list", () => {
    expect(
      isScheduleConflict([
        {
          start: new Date(2022, 10, 2, 5, 30),
          end: new Date(2022, 10, 2, 6, 30),
        },
        {
          start: new Date(2022, 10, 2, 7, 30),
          end: new Date(2022, 10, 2, 8, 30),
        },
        {
          start: new Date(2022, 10, 2, 9, 30),
          end: new Date(2022, 10, 2, 10, 30),
        },
      ])
    ).toBe(false);
  });

  it("returns true for a conflicting reservations list", () => {
    expect(
      isScheduleConflict([
        {
          start: new Date(2022, 10, 2, 2, 30),
          end: new Date(2022, 10, 2, 3, 30),
        },
        {
          start: new Date(2022, 10, 2, 2, 30),
          end: new Date(2022, 10, 2, 2, 40),
        },
        {
          start: new Date(2022, 10, 2, 2, 40),
          end: new Date(2022, 10, 2, 2, 50),
        },
      ])
    ).toBe(true);
  });
});
