import styled from "styled-components";

import { Spinner } from "../Loading/loading.style";

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;
  display: flex;
  flex-direction: column;

  ${Spinner} {
    align-self: center;
    margin-top: 15px;
    height: 15px;
  }

  &:first-child {
    margin-top: 0;
  }
  li {
    flex: 1;
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0px;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      font-weight: ${props => (props.main ? "bold" : "normal")};
      &:hover {
        color: #fff;
      }
    }
  }

  span {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.11px;
    line-height: 22px;
    font-weight: 300;
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  img {
    margin-right: 10px;
  }
`;
