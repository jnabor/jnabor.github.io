import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 25px;
  padding: 15px 20px 13px 20px;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 2px;
  background-color: #353536;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 7px 7px 14px #2b2b2c, -7px -7px 14px #3f3f40;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  &:disabled {
    background: gray;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`
