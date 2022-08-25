import React from "react";
import Chart from "./components/Chart/Chart";
import data from "./data/data";

const App: React.FC = () => {
	return <Chart data={data}></Chart>;
};

export default App;
