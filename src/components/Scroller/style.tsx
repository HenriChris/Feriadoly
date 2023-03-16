import styled from 'styled-components';
import { Shadow, style } from '../../global/global';

export const ScrollerWrapper = styled.div`
    margin: 2% auto 2% auto;
    width: 95%;
    max-width: 1000px;
    /* font-size: 32px; */
    font-size: 2rem;
    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
    /* font-size: 3.6vh; */
    color : ${style.colors.brownishRed};
`;

export const ScrollerTitle = styled.span`
    margin-left: 1%;
`;

export const StyledScroller = styled.div`
    height : 40vh;
    background: ${style.colors.lightBeige};
    border-radius: 15px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;
    };
    &::-webkit-scrollbar-thumb {
        background-color: ${style.colors.pink};
        border-radius: 15px;
    };
    &::-webkit-scrollbar-button {
        display: none;
    };
    &::-webkit-scrollbar-track {
        margin: 10px;
        background-color: ${style.colors.lightPink};
        border-radius: 15px;
    };
`;

export const ScrollerContent = styled(Shadow)`
    background: ${style.colors.lightBeige};
    padding-right: 1%;
    border-radius: 15px;
`;

export const Holidays = styled.div`
    display: flex;
    /* height: 24.7325%; */
    height: 10vh;
    font-weight: 600;
    border-bottom: 1px solid ${style.colors.brownishRed};
    overflow-x: hidden;
    white-space: nowrap;
`;

export const HolidaysDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 272px; */
    width: 28.0412371%;
    min-width: 9.5rem;

    border-right: 1px solid ${style.colors.brownishRed};
`;

export const HolidaysText = styled.div`
    display: flex;
    align-items: center;
    margin-left: 3vw;
`;