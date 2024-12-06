import styled from "@emotion/styled";

export const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #eee;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border: 1px solid #bbb;

  div.left {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #aaa;
    width: 200px;
    height: 100%;
  }
  div.right {
    border: pink;
  }
`;
export const GnbUl = styled.ul`
  display: flex;
  margin-right: 30px;
  margin-top: 30px;
  height: 40px;
  overflow: hidden;
  :hover {
    height: 200px;
  }
  a {
    transition: all 0.3s;
  }
  a:hover {
    background-color: pink;
  }
`;

export const SubmenuUl = styled.ul`
  background-color: #eee;
  height: 0;
  transition: all 0.3s;
  & > li {
    background-color: #eee;
    height: 40px;
    text-align: center;
    line-height: 40px;
    > a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const MainMenuDiv = styled.div`
  > a {
    display: block;
    width: 150px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #bbb;
  }
`;
