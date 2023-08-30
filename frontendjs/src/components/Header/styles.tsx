import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    padding: 6px;
    align-items: center;
`;

export const EcommerceApp = styled.h2`
    color: purple;
    font-size: 28px;
`;

export const PopUpContainer = styled.div`
    width: 120px;
    height: 180px;
    background-color: #e6e6e6;
    margin-top: -30px;
    position: absolute;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

export const LinksPopUp = styled.p`
    color: purple;
    font-size:20px;
`;

export const ButtonPhoto = styled.button`
    background-color: transparent;
    border: none;
`;

export const ButtonHeader= styled.button`
    background-color: transparent;
    border: none;
`;


