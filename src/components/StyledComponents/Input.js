import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  color: #3d5afe;
  font-size: 1rem;
  border:none;
  border-bottom: 2px solid #3d5afe;
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  width: 95%;

  transition-duration: .2s;

  :focus-visible{
    outline:none;
    border: 2px solid #3d5afe;
  }
`;
