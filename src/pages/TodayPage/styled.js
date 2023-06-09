import styled from "styled-components";

export const TodayContainer = styled.div`
    background-color: #E5E5E5;
    min-height: 2000px;
    padding-top: 98px;
`;

export const TodayContent = styled.main`
    display: flex;
    flex-direction: column;
    margin-left: 17px;
`;

export const CheckCard = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 94px;
    border-radius: 5px;
    color: #666666;
    margin-bottom: 10px;
    position: relative;
    h5 {
        font-size: 20px;
        margin-top: 13px;
        margin-left: 15px;
        margin-bottom: 7px;
    }
    p {
        font-size: 13px;
        margin-left: 15px;
    }
    img {
        position: absolute;
        top: 20px;
        left: 19px;
        z-index: 1;
    }
    div {
        background-color: ${(props) => props.concluded ? "#8FC549" : "#EBEBEB"};
        width: 69px;
        height: 69px;
        border-radius: 5px;
        border: ${(props) => !props.concluded && "1px solid #E7E7E7"};
        position: relative;
        position: absolute;
        top: 13px;
        right: 13px;
    }
`;

export const MainHeaderToday = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
    p {
        font-size: 18px;
        font-weight: 400;
        color: ${(props) => props.percentage ? "#8FC549" : "#BABABA"};
        margin-top: 7px;
    }
`;

export const Sequence = styled.span`
    color: ${(props) => props.concluded ? "#8FC549" : "#666666"};
`;

export const Record = styled.span`
    color: ${(props) => props.record ? "#8FC549" : "#666666"};
`;