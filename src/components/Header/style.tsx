import styled from 'styled-components';
import { style } from '../../global/global';

export const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    
    font-size: 128px;

    background-color: ${style.colors.red};
    color: ${style.colors.white};

    user-select: none;
`;