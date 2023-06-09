import styled from "styled-components";

export const RegisterContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 180px;
        height: 180px;
        margin-top: 68px;
        margin-bottom: 33px;
    }
`;

export const FormRegisterContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ButtonRegister = styled.button`
    height: 45px;
    width: 303px;
    background-color: #52B6FF;
    border: 1px solid #52B6FF;
    border-radius: 5px;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    opacity: ${(props) => props.disabled ? 0.7 : 1};
`;

export const LoginLink = styled.div`
    height: 17px;
    margin-top: 25px;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline #52B6FF;
    text-align: center;
`;    
export const Dots = styled.div`
    width: 51px;
    height: 13px;
    position: absolute;
    left: 165px;
    top: 475px;
`;