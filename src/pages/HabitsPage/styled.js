import styled from "styled-components";

export const HabitsContainer = styled.div`
    background-color: #E5E5E5;
    min-height: 2000px;
    padding-top: 98px;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 17px;
    button {
        width: 40px;
        height: 35px;
        padding-bottom: 5px;
        border: 1px solid #52B6FF;
        background-color: #52B6FF;
        border-radius: 5px;
        margin-right: 18px;
        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }   
`;
export const MainContent = styled.div`
    width: 338px;
    height: 74px;
    margin: 0 auto;
    margin-top: 20px;
    p {
        color: #666666;
        font-size: 18px;
        line-height: 23px;
        margin-top: 29px;
    } 
`;

export const CreateHabitMenu = styled.div`
    background-color: #FFFFFF;
    height: 180px;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    position: relative;
`;
export const FormContainer = styled.div`
    margin-top: 18px;
    margin-left: 19px;
`;
export const DaysContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-left: 19px;
`;

export const ButtonDays = styled.button`       
    width: 30px;
    height: 30px;
    font-size: 20px;
    background-color: ${(props) => !props.selected ? "#FFFFFF": "#CFCFCF"};
    color: ${(props) => !props.selected ? "#DBDBDB" : "#FFFFFF"};
    border-radius: 5px;
    border: ${(props) => !props.selected ? "1px solid #D5D5D5" : "1px solid #CFCFCF"};
    
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 176px;
    margin-top: 30px;
    
    position: absolute;
    right: 16px;
    bottom: 23px;
    
    button:nth-child(1) {
        width: 69px;
        height: 20px;
        background-color: #FFFFFF;
        color: #52B6FF;
        font-size: 16px;
        border: 1px solid #FFFFFF;
        opacity: ${(props) => props.disabled ? 0.7 : 1};
    }

    button:nth-child(2) {
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 16px;
        border: 1px solid #52B6FF;
        border-radius: 5px;
        margin-top: 5px;
        opacity: ${(props) => props.disabled ? 0.7 : 1};
        position: relative;
    }
`;

export const ContainerHabit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const HabitInfos = styled.div`
    color: #666666;
    position: relative;
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    h5 {
        font-size: 20px;
        position: absolute;
        top: 13px;
        left: 15px;
    }
    img {
        position: absolute;
        top: 11px;
        right: 11px;
    }
`;

export const DotsLogin = styled.div`
    width: 51px;
    height: 13px;
    margin-bottom: 20px;
    position: absolute;
    left: 15px;
    bottom: 23px;
`;

export const DaysContainerCreated = styled.div`
    display: flex;
    gap: 5px;
    margin-left: 14px;
    margin-top: 46px;
`;