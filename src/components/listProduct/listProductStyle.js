import styled from 'styled-components';



export const GoodDescription = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
`;
export const ContainerBox = styled.div `
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    flex-wrap: wrap;
`;
export const GoodImg = styled.div `
    position: relative;
    width: 300px;
    height: 300px;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    
`;
export const GoodPrice = styled.div `
    position: relative;
`;
export const Button = styled.button `
    border: none;
    background-color: black;
    color: white;
    border-radius: 3px;
    padding: 6px 26px;
    margin: 13px 10px;

`;