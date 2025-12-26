export function getMonthMatrix(year: number, month: number) {
	const first = new Date(year, month, 1);
	const start = (first.getDay() + 6) % 7; // Monday start
	const total = new Date(year, month + 1, 0).getDate();

	const cells: (string | null)[] = Array(start).fill(null);

	for (let d = 1; d <= total; d++) {
		cells.push(new Date(year, month, d).toISOString().split("T")[0]);
	}

	return cells;
}

export const toDateKey = (date: Date | string) => {
	if (typeof date === "string") return date;
	return date.toISOString().split("T")[0];
};
