import { useMemo, useState } from "react";
import { getMonthMatrix } from "../utils/calendar";

export function useCalendar() {
	const [currentDate, setCurrentDate] = useState(new Date());

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();

	const days = useMemo(() => getMonthMatrix(year, month), [year, month]);

	const goPrevMonth = () => {
		setCurrentDate(
			(prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
		);
	};

	const goNextMonth = () => {
		setCurrentDate(
			(prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
		);
	};

	return {
		currentDate,
		days,
		goPrevMonth,
		goNextMonth,
	};
}
