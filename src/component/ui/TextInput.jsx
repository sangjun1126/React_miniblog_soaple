import React from "react";
import styled from "styled-components";

// Button 컴포넌트와 동일하게 styled-components를 사용하여 css를 구상하였다.

const StyledTextarea = styled.textarea`
    width : calc(100% - 32px);
    ${(props) => props.height &&`
    height : ${props.height}px;
`}
padding : 16px;
font-size : 16px;
line-height: 32px;
`;

function TextInput(props) {
    const {height, value, onChange} = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />
}

export default TextInput;