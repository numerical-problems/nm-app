import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 250px);
    margin-left: auto;
    height: calc(100vh - 60px);
    overflow-y: auto;
    display: grid;
    grid-template-columns: 5fr 4fr;

    h3 {
        color: #011859;
        letter-spacing: 0.7px;
        margin-bottom: 12px;
    }

    p {
        color: #5A6997;
    }

    .left {
        background: #FFF6E5;
        padding: 30px 30px 0 30px;
    }

    .right {
        background: #F0EADA;
        padding: 30px 30px 0 30px;

    }
`;
