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
    
export const SlideDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  height: 300px;
  background-color: burlywood;
`;

export const ContentLayoutDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  height: 200px;
  background-color: aqua;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: brown;
  &:nth-child(2) {
    background-color: rebeccapurple;
  }
  &:nth-child(3) {
    background-color: blue;

  }
`;
