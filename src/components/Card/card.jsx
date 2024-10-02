import React from "react";
import "./card.css";
import UserIcon from "../UserIcon/userIcon";
// import { LuMoreHorizontal } from "react-icons/lu";
import { getStatusIcon } from "../../utils/priority";
import Menu from "../../assets/3 dot menu.svg"

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className="card">
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {hideProfileIcon ? null : (
          <UserIcon name={userData.name} available={userData.available} />
        )}
      </div>
      <div className="middle-container">
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="bottom-container">
        <img src={Menu} alt="3 dot menu" />
        {ticket.tag.map((t) => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
