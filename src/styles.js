import styled from 'styled-components';

export const Container = styled.div `
    widht: 100%;
    height: 100vh;
    background-color: #fafafa;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div `
    background-color: #ffffff;
    width: 50%;
    min-height: 350px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-diretcion: column;
    justify-content: space-between;
    align-items: center;
`