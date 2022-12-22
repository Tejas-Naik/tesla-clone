import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';


function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <ItemText>
                <Fade bottom>  { /* React Reveal to fade-in from bottom */}
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </Fade>
            </ItemText>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>

                        {props.rightBtnText && <RightButton>
                            {props.rightBtnText}
                        </RightButton>}
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-aign: center;   
`

const Buttons = styled.div``;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    height: 40px;
    width: 256px;
    background-color: rgba(23,26,32,.8);
    color: white;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    opacity: .85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`