import styled from 'styled-components';
import { Shadow, style } from '../../global/global';


export const StyledCard = styled(Shadow)`
    text-align: start;
    color : ${style.colors.brownishRed};
    background: ${style.colors.lightBeige};
    height: 314px;
    width: 60%;
    @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        width: 95%;  
    }
    border-radius: 15px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 22px;
`;

export const ContentOff = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`;

export const CardText = styled.div`
    font-size: 20px;
    min-width: 118px;
    padding-bottom: 15px;
`;

export const CardDescription = styled.div`
    display: flex;
    flex-direction: row;
`;