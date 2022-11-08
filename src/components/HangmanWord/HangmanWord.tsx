import React from "react";
import styles from "./HangmanWord.module.css";

type Props = {
	guessedLetters: string[];
	wordToGuess: string;
};

const HangmanWord = ({ guessedLetters, wordToGuess }: Props) => {
	return (
		<div className={styles.container}>
			{wordToGuess.split("").map((letter, index) => (
				<span key={index} className={styles.span}>
					<span
						style={{
							visibility: guessedLetters.includes(letter)
								? "visible"
								: "hidden",
						}}>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
};

export default HangmanWord;
