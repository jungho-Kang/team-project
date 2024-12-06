import styled from "@emotion/styled";

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
