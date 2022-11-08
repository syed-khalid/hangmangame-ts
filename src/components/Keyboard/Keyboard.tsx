import React from "react";
import styles from "./Keyboard.module.css";

const KEYS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

type Props = {
	activeLetters: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
}: Props) => {
	return (
		<div className={styles.container}>
			{KEYS.map((key, index) => {
				const isActive = activeLetters.includes(key);
				const isInactive = inactiveLetters.includes(key);

				return (
					<button
						key={index}
						className={`${styles.btn} ${isActive ? styles.active : ""} ${
							isInactive ? styles.inactive : ""
						}`}
						disabled={isActive || isInactive}
						onClick={() => addGuessedLetter(key)}>
						{key}
					</button>
				);
			})}
		</div>
	);
};

export default Keyboard;
