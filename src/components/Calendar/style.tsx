import styled from 'styled-components';
import { Shadow, style } from '../../global/global';

export const CalendarWrapper = styled(Shadow)`
    background-color: ${style.colors.lightBeige};
    
    border-radius: 15px;
    /* height: 314px; */
    height: fit-content;
    width: 350px;
    color: ${style.colors.brownishRed};
    user-select: none;
`;

export const CalendarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 6px;
`;

export const CalendarHeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${style.colors.brownishRed};
    width: 50%;
`;

export const CalendarButton = styled.img`
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
`;

export const CalendarButtonLeft = styled(CalendarButton)`
    margin-left: 10px;
`;

export const CalendarButtonLeftOff = styled.div`
    margin-left: 10px;
    width: 24px;
    height: 24px;
`;

export const CalendarButtonRight = styled(CalendarButton)`
    margin-right: 10px;
    transform: rotate(180deg);
`;

export const CalendarButtonRightOff = styled.div`
    margin-right: 10px;
    width: 24px;
    height: 24px;
`;


export const CalendarWeekWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 4px;
`;

export const CalendarDay = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 35px;
    width: 35px;
`;

export const CalendarDayNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 20px;
    height: 35px;
    width: 35px;

    &:hover {
        background-color: ${style.colors.lightPink};
        cursor: pointer;
    }

    &:active {
        background-color: ${style.colors.pink};
    }
`;

export const CalendarDayNumberOn = styled(CalendarDayNumber)`
    background-color: ${style.colors.pink};
    &:hover {
        background-color: ${style.colors.pink};
    }
`;

export const CalendarDayNumberOff = styled(CalendarDayNumber)`
    opacity: 0.4;
    &:hover {
        background-color: ${style.colors.lightBeige};
        cursor: default;
    }

    &:active {
        background-color: ${style.colors.lightBeige};
    }
`;