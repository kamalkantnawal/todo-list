import { styled } from "styled-components";

export const TodolistDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #1c1c39;

  align-items: center;
  .full-div {
    // border: 1px solid orange;
    padding: 5px;
    border-radius: 12px;
    background-color: #a5a5d5;
  }
  .items {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 5px;
    background-color: #a5a5d5;
    // border: 1px solid;
  }
  .btn {
    position: relative;
    left: 12px;
  }
  .btn-right-radius {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border:1px solid efe8ff;
 
 
}
  }
  .btn-left-radius {
     border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border:1px  efe8ff;
  }
`;
