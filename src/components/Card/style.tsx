import styled from 'styled-components';
import { Shadow, style } from '../../global/global';

export const StyledCard = styled(Shadow)`
    text-align: start;
    color : ${style.colors.brownishRed};
    background: ${style.colors.lightBeige};
    border : 6px solid ${style.colors.pink};
    height: 300px;
    width: 600px;
    border-radius: 15px;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 22px;
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