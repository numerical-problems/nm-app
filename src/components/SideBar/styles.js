import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #F0EADA;

    .title {
        padding: 20px;
        font-size: 18px;
        color: #243562 !important;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        text-align: center;
        margin-bottom: 18px;
    }

    .sidebar-items {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .sidebar-item {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 20px 0px;
            
            background: #f3d1c2;
            border-left: 5px solid #ED8CAD;
            
            .text {
                color: #041855;
            }

            .icon {
                margin-right: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;
