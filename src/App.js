import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./App.css";

import DatePicker from "./DatePicker";
import DropDownSelect from "./DropDownSelect";
import ReservationList from "./ReservationList";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [room, setRoom] = useState();
  const [rooms, setRooms] = useState([]);

  const filteredReservations = useMemo(() => {
    return reservations.filter((reservation) => {
      return (
        reservation.room.id === room &&
        new Date(reservation.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
    });
  }, [date, room]);

  useEffect(async () => {
    const reservations = await axios
      .get("https://cove-coding-challenge-api.herokuapp.com/reservations")
      .then((res) => (res?.data?.length ? res.data : []))
      .catch(() => []);

    setReservations(reservations);

    const uniqueRooms = [
      // eslint-disable-next-line no-undef
      ...new Map(
        reservations.map((item) => [item.room["id"], item.room])
      ).values(),
    ];

    setRooms(uniqueRooms);
    setRoom(uniqueRooms[0].id);
  }, []);

  return (
    <div className="app">
      <div className="app-filters">
        <div className="app-filter-item">
          <DatePicker value={date} onChange={(newDate) => setDate(newDate)} />
        </div>
        <div className="app-filter-item">
          <DropDownSelect
            value={room}
            onChange={(newRoom) => setRoom(newRoom)}
            options={rooms}
          />
        </div>
      </div>
      <div className="app-reservations">
        <ReservationList reservations={filteredReservations} />
      </div>
    </div>
  );
};

export default App;
