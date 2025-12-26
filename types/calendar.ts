export type Status = "YES" | "NO" | null;

export type IconKey =
	| "exercise"
	| "study"
	| "focus"
	| "habit"
	| "health"
	| "default";

export type Task = {
	id: string;
	label: string;
	icon: IconKey;
};

export type DayEntry = {
	tasks: Record<string, Status>;
};
