import styled from 'styled-components';
import { Shadow, style } from '../../global/global';

export const ScrollerWrapper = styled.div`
    margin: 12px auto 35px auto;
    width: 1000px;
    font-size: 32px;
    color : ${style.colors.brownishRed};
`;

export const ScrollerTitle = styled.span`
    margin-left: 10px;
`;

export const StyledScroller = styled.div`
    height : 327px;
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
    border : 6px solid ${style.colors.pink};
    background: ${style.colors.lightBeige};
    padding-right: 10px;
    border-radius: 15px;
`;

export const Holidays = styled.div`
    display: flex;
    height: 81px;
    font-weight: 600;
    font-size: 32px;
    border-bottom: 1px solid ${style.colors.brownishRed};
    overflow-x: hidden;
    white-space: nowrap;
`;

export const HolidaysDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 272px;

    border-right: 1px solid ${style.colors.brownishRed};
`;

export const HolidaysText = styled.div`
    display: flex;
    align-items: center;
    
    padding-left: 40px;
`;
