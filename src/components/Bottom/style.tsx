import styled from 'styled-components';

export const DateContextProviderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    max-width: 1000px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;