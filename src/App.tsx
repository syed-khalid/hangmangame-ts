import { useEffect, useState, useCallback } from "react";
import "./App.css";

import words from "./assets/wordList.json";

//Component Imports
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)];
	});

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const inCorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);

	const addGuessedLetter = useCallback(
		(key: string) => {
			if (guessedLetters.includes(key)) return;

			setGuessedLetters((currentLetters) => [...currentLetters, key]);
		},
		[guessedLetters]
	);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;

			if (!key.match(/^[a-z]$/)) return;

			e.preventDefault();
			addGuessedLetter(key);
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [guessedLetters]);

	return (
		<div className='App'>
			<h1>Hangman Game</h1>
			<HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
			<HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
			<Keyboard
				activeLetters={guessedLetters.filter((letter) =>
					wordToGuess.includes(letter)
				)}
				inactiveLetters={inCorrectLetters}
				addGuessedLetter={addGuessedLetter}
			/>
		</div>
	);
}

export default App;

