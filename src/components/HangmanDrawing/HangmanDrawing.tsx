import React from "react";
import styles from "./HangmanDrawing.module.css";

import HangmanBody from "../HangmanBody/HangmanBody";

type Props = {
	numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: Props) => {
	return (
		<div style={{ position: "relative" }}>
			<HangmanBody numberOfGuesses={numberOfGuesses} />
			<div
				style={{
					position: "absolute",
					height: "50px",
					width: "10px",
					background: "#303030",
					marginLeft: "320px",
				}}
			/>
			<div
				style={{
					height: "10px",
					width: "200px",
					background: "#303030",
					marginLeft: "120px",
				}}
			/>
			<div
				style={{
					height: "400px",
					width: "10px",
					background: "#303030",
					marginLeft: "120px",
				}}
			/>
			<div style={{ height: "10px", width: "250px", background: "#303030" }} />
		</div>
	);
};

export default HangmanDrawing;
