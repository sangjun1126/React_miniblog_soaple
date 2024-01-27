import React from "react";
import styled from 'styled-components';


// 버튼에 스타일 입히기
const StyledButton = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
`;

function Button(props) {
    const {title, onClick} = props;
    // props의 쓰임
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
}

export default Button