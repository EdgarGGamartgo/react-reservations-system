import React from "react";
import "./reservation-list.scss";

import { format } from "date-fns";

const ReservationList = ({ reservations }) => (
  <div className="list-container">
    {reservations?.map(({ id, room, start, end }) => (
      <div key={id} className="card">
        <div className="image-container">
          <img src={room?.imageUrl} />
        </div>
        <div className="date-container">
          <div className="title">
            {format(new Date(start), "h:mma")} -{" "}
            {format(new Date(end), "h:mma")}
          </div>
          <div className="subtitle">{format(new Date(start), "MMMM d y")}</div>
        </div>
        <div className="room-container">{room.name}</div>
      </div>
    ))}
  </div>
);

export default ReservationList;
