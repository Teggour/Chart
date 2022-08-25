import React, { useState } from "react";
import Chart from "./components/Chart/Chart";
import ServerData from "./data/data";
import { IDataElement } from "./interfaces";
import "./App.css";

const App: React.FC = () => {
	const [data, setData] = useState<IDataElement[]>(ServerData);
	const getRandomData = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const newData: IDataElement[] = Array.from(Array(4)).map(
			(el: undefined, i: number) => ({
				name: i + 1 + ")",
				time: (Math.floor(Math.random() * 100) + 1) / 10,
			})
		);
		setData(newData);
	};

	return (
		<>
			<Chart data={data}></Chart>
			<button onClick={(e) => getRandomData(e)} className="button">
				Change data
			</button>
		</>
	);
};

export default App;
