import React from "react";
import history from "../../services/history";
import { Container } from "./styles";
import { menus } from '../../constants';

function SideBar({ active }) {
  return (
    <Container>
      <div className="title">Métodos numéricos</div>

      <div className="sidebar-items">
        {menus?.map((item, index) => (
          <div
            key={index}
            className={`sidebar-item ${item.id === active ? "active" : ""}`}
            onClick={() => history.push(item.path)}
          >
            <div className="icon">{item.icon}</div>
            <div className="text">{item.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default SideBar;
