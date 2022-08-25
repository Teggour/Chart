import React from "react";
import { IChartProps, IDataElement } from "../../interfaces";
import "./chartStyles.css";

interface INewData extends IDataElement {
	beforeTime: number;
}

const Chart: React.FC<IChartProps> = ({ data }) => {
	const totalTime: number = data.reduce((acc: number, curr: IDataElement) => {
		return acc + curr.time;
	}, 0);

	const newData: INewData[] = data.reduce(
		(acc: INewData[], curr: IDataElement, i: number) => {
			return [
				...acc,
				{
					...curr,
					beforeTime:
						i === 0 ? 0 : acc[i - 1].beforeTime + acc[i - 1].time,
				},
			];
		},
		[]
	);

	return (
		<div className="chart">
			<div className="chart__title">SPENT TIME (SECONDS)</div>

			<div className="chart__content">
				{!!newData.length &&
					newData.map((el: INewData, i: number) => (
						<div className="chart-element" key={i + el.name}>
							<div className="chart-element__title">
								{el.name}
							</div>

							<div className="chart-element__value">
								<div className="line">
									<div
										className="line__time"
										style={{
											width: `${
												(el.time / totalTime) * 100
											}%`,
											left: `${
												(el.beforeTime / totalTime) *
												100
											}%`,
										}}
									>
										{el.time}
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Chart;
