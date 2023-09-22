'use client'

import { useRouter } from "next/navigation"
import styled from "styled-components"

export default function Login() {
    const { push } = useRouter();

    const login = () => {
        push('/home');
    };

    return (
        <Wrapper>
            <span>Logo</span>

            <Container>
                <FormField>
                    <Label>Usuário</Label>
                    <Input placeholder="Usuário" />
                </FormField>
                <FormField>
                    <Label>Senha</Label>            
                    <Input placeholder="Senha" />
                </FormField>
            </Container>
           
            <Button 
                type='button' 
                onClick={login}
            >
                Entrar
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 360px;
    height: 380px;
    padding: 16px;

    background-color: white;
    border: 1px solid #ccc;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    height: max-content;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 700;
    color: #333;
`;

const Input = styled.input`
    height: 46px;
    border-radius: 2px;
    border: 1px solid #cbcbcb;
    padding: 0px 8px;

    &:focus {
        outline: none;
        border: 1px solid #4f8699;
    }
`;

const Button = styled.button`
    height: 46px;
    border-radius: 2px;
    padding: 0px 8px;
    border: none;
    background-color: #4f8699;
    color: white;

    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;

// .color1 { #dad6ca };
// .color2 { #1bb0ce };
// .color3 { #4f8699 };
// .color4 { #6a5e72 };
// .color5 { #563444 };