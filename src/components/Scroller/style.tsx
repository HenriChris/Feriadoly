import styled from 'styled-components';
import { style } from '../../global/global';

export const ScrollerWrapper = styled.div`
    margin: 12px auto 35px auto;
    max-width: 1000px;
    font-size: 2rem;
    color : ${style.colors.brownishRed};
`;

export const Title = styled.span`
    margin-left: 10px;
`;

export const StyledScroller = styled.div`
    height : 327px;

    background: ${style.colors.lightBeige};

    margin-top: 12px;
    border : 6px solid ${style.colors.pink};
    border-radius: 15px;

    overflow-y: scroll;
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
