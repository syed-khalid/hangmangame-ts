import React from "react";
import styles from "./HangmanBody.module.css";

type Props = {
	numberOfGuesses: number;
};

const HangmanBody = ({ numberOfGuesses }: Props) => {
	const body = [
		styles.head,
		styles.body,
		styles.right_arm,
		styles.left_arm,
		styles.right_leg,
		styles.left_leg,
	];

	const renderedOutput = body.map((part) => (
		<div key={part} className={part} />
	));

	return <>{renderedOutput.slice(0, numberOfGuesses)}</>;
};

export default HangmanBody;
