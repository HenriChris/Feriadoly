import styled from 'styled-components';

export const style = {
    colors: {
        lightPink: '#FFCCD5',
        red: '#A4133C',
        white: '#FFFFFF',
        brownishRed: '#590D22',
        lightBeige: '#FFEEE1',
        pink: '#FF758F'
    },
    fonts: {
        sans: 'sans-serif',
    }
};

export const Page = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: sans-serif;
    font-weight: 600;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
`;

export const Shadow = styled.div`
    border: 6px solid ${style.colors.pink};
    box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.1),
    0 12px 8px rgba(0, 0, 0, 0.06),
    0 20px 20px rgba(0, 0, 0, 0.04),
    0 20px 40px rgba(0, 0, 0, 0.02);
`;
