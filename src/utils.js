/**
 * @param {{ start: Date, end: Date }[]} reservations - list of reservations
 *
 * @returns true if any 2 reservations conflict
 *   - reservations conflict if their times overlap in any way
 *   - reservations DO NOT conflict if they are just touching each other (reservation1.end === reservation2.start)
 */

export const isScheduleConflict = (reservations) => {
  return reservations.some((reservation, i) => {
    const restOfReservations = reservations;
    restOfReservations.splice(i, 1);
    return restOfReservations.some(
      ({ start, end }) =>
        reservation.start.getTime() < end.getTime() &&
        reservation.end.getTime() > start.getTime()
    );
  });
};
