import styled from 'styled-components';

export const CartBox = styled.div`
    background: whitesmoke;
    width: 600px;
    height: 315px;
    overflow-y: scroll;
   
`;
export const HeaderCart = styled.div `
    display: flex;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
    padding: 2px 12px;
    margin-top: 4px;
    font-size: 18px;
`;
export const Cover = styled.div `
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0, .5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ImgCart = styled.td `
    width: 100px;
    height: 100px;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
`;
export const CartTotalBox = styled.div `
    display: flex;
    justify-content: flex-end;
    margin: 6px 0px;
    border-top: 1px solid;;
`;


