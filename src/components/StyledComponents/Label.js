import styled from "styled-components";

export const Label = styled.label`
    text-align: left;
    box-sizing: border-box;
    font-size: 1rem;
    transition-duration: .5s;
    width: 100%;
    padding-left: 5px;
    
    :focus-within{
        color:#3d5afe;
        font-size: .7rem;
        /* font-style: italic; */
    }
`;