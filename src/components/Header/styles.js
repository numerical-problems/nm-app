import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 250px);
    margin-left: auto;
    height: 60px;
    padding: 0 30px;
    background: #FFF6E5;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    .title {
        font-size: 18px;
        color: #5A6997;
        font-weight: 500;
        margin-left: 12px;
    }

    g {
        path:nth-child(2) {
            color: #5A6997;
        }
    }
`;
