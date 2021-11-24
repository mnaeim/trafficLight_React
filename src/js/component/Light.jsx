import React, { useState } from "react";
import "bootstrap";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("off");
	let red = "bg-danger rounded-circle";
	let yellow = "bg-warning rounded-circle";
	let green = "bg-success rounded-circle";
	let off = "bg-secondary rounded-circle";

	return (
		<div className="box">
			<div className="light" onClick={() => setColor("red")}>
				{color == "yellow" || color == "green" || color == "off" ? (
					<div className={off}></div>
				) : (
					<div className={red}></div>
				)}
			</div>
			<div className="light" onClick={() => setColor("yellow")}>
				{color == "red" || color == "green" || color == "off" ? (
					<div className={off}></div>
				) : (
					<div className={yellow}></div>
				)}
			</div>
			<div className="light" onClick={() => setColor("green")}>
				{color == "yellow" || color == "red" || color == "off" ? (
					<div className={off}></div>
				) : (
					<div className={green}></div>
				)}
			</div>
		</div>
	);
};

export default TrafficLight;
