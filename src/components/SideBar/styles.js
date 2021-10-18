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
        color: #011859 !important;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        text-align: center;
        letter-spacing: 0.6px;
        margin-bottom: 80px;
    }

    .sidebar-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;

        .sidebar-item {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 20px 0px 20px 40px;
            border-left: 5px solid transparent;
 
            .text {
                color: #5A6997;
                font-weight: 500;
                letter-spacing: 0.6px;
            }

            .icon {
                margin-right: 12px;
                display: flex;
                align-items: center;

                g {
                    path:nth-child(2) {
                        color: #5A6997;
                    }

                }
            }

            &.active {
                background: #f3d1c2;
                border-left: 5px solid #ED8CAD;

                .text {
                    color: #041855;
                }
                .icon {
                    g {
                        path:nth-child(2) {
                            color: #041855;
                        }

                    }
                }
            }
            
            
        }
    }
`;
