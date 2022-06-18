import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width:100%;  
    span {
        color: #fff;
        font-weight: 700;
    }
`

export const ProfileImage = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 26.5px;    
    object-fit: cover; 
    margin-right: 18px;
    @media(max-width: 611px) {
        display:none;
    }
`

export const LittleHeader = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 53px;
    margin-bottom:44px;
    
`

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 50%;
    max-width:50%;
    position:relative;
    
    @media(max-width: 611px) {
        max-width:611px;
    }
`

export const Sidebar = styled.div`
    margin-top: 160px;
    @media(max-width: 611px) {
        display:none;
    }
`
export const Title = styled.p`
    
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;
    @media(max-width: 611px) {
        margin-top: 19px;
        margin-bottom: 19px;
        margin-left: 19px;
        font-size: 33px;
        line-height: 49px;
    }


`