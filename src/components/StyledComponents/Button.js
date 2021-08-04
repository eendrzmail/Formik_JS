import styled, {css} from "styled-components";

export const Button = styled.button`
  color: white;
  border: 2px solid #0e8fe6;
  background-color: #0e8fe6;
  font-size: 1em;
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.50em 1em;

  ${(props) =>
    props.primary && css`
      border-color: pink;
      border-color: pink;
      background-color: pink;
    `}
`;
