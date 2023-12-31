"use client";

import { styled } from "styled-components";
import { Alphabet } from "./components/alphabet";
import { TermsList } from "./components/terms-list";

export default function Home() {
	return (
		<Body>
			<NavBar>
				<span>Logo</span>

				<LinksContainer>
					<Link>Início</Link>
					<Link>Termos</Link>
					<Link>Cadastrar</Link>
				</LinksContainer>

				<span>Sair</span>
			</NavBar>

			<Alphabet />

			<Content>
				<TermsList />
			</Content>
		</Body>
	);
}

const Body = styled.main`
	height: 100%;
	width: 100%;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NavBar = styled.nav`
	width: calc(100% - 30px);
	height: 60px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #4f8699;
	padding: 0px 16px;

	color: white;
`;

const Link = styled.a``;

const LinksContainer = styled.div`
	width: max-content;

	display: flex;
	gap: 24px;
`;

const Content = styled.div`
	height: calc(100% - 50px);
`;
