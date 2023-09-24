import styled from "styled-components";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/db/firebase";
import { Term } from "@/types/term";

export function TermsList() {
	const [terms, setTerms] = useState<Term[]>([]);

	useEffect(() => {
		const collectionRef = collection(db, "terms");

		const q = query(collectionRef, orderBy("title", "asc"));

		const uns = onSnapshot(q, (querySnapshot) => {
			setTerms(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					title: doc.data().title,
					description: doc.data()?.description,
					examples: doc.data().examples,
				}))
			);
		});

		return uns;
	}, []);

	return (
		<Container>
			{terms.map(({ id, title, description, examples }) => (
				<TermCard key={id}>
					<Title>{title}</Title>

					<Description>{description}</Description>

					<ExamplesWrapper>
						{examples.map((ex, index) => (
							<Example key={index}>{ex}</Example>
						))}
					</ExamplesWrapper>
				</TermCard>
			))}
		</Container>
	);
}

const Container = styled.div`
	width: 600px;
	height: auto;

	display: flex;
	flex-direction: column;
`;

const TermCard = styled.div`
	border: 1px solid #444;

	display: flex;
	flex-direction: column;
`;

const Title = styled.span``;

const Description = styled.span`
	margin-top: 16px;
`;

const ExamplesWrapper = styled.ul`
	list-style: none;
`;

const Example = styled.li``;
