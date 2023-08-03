import React from "react";
import MenuItem from "../components/MenuItem";
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="Menu">
    <h1 className="menuTitle">Nos Menus</h1>
    <div className="menuList">
    {MenuList.map((menuItem, key) => {
          return (
           <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />                     
          );
        })}
</div>
    </div>
    
  )
}

export default Menu
