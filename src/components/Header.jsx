import styled from "@emotion/styled";
import { GnbUl, HeaderDiv, MainMenuDiv, SubmenuUl } from "./Estyle";
const headerMenu = ["MENU-1", "MENU-2", "MENU-3", "MENU-4"];

const Header = () => {
  return (
    <HeaderDiv>
      <div className="left">
        <a href="#" className="logo">
          logo
        </a>
      </div>
      <div className="right">
        <GnbUl>
          {headerMenu.map((item, index) => {
            return (
              <MainMenuDiv key={index}>
                <a href="#">{item}</a>
                <SubmenuUl>
                  <li>
                    <a href="#">submenu-1</a>
                  </li>
                  <li>
                    <a href="#">submenu-2</a>
                  </li>
                  <li>
                    <a href="#">submenu-3</a>
                  </li>
                  <li>
                    <a href="#">submenu-4</a>
                  </li>
                </SubmenuUl>
              </MainMenuDiv>
            );
          })}
        </GnbUl>
      </div>
    </HeaderDiv>
  );
};
export default Header;
