import { styled } from "styled-components"

export function Alphabet() {
    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
        <Container>
            {
                LETTERS.map((letter) => (
                    <Letter>{letter}</Letter>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
    width: 90vw;
    height: max-content;
    padding: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

`;

const Letter = styled.span``;