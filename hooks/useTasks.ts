import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { DayEntry, Status, Task } from "../types/calendar";

const TASKS_KEY = "TASKS_LIST";
const DATA_KEY = "CALENDAR_TASKS";
const today = new Date().toISOString().split("T")[0];

export function useTasks() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [data, setData] = useState<Record<string, DayEntry>>({});

	useEffect(() => {
		load();
	}, []);

	const load = async () => {
		const t = await AsyncStorage.getItem(TASKS_KEY);
		const d = await AsyncStorage.getItem(DATA_KEY);
		if (t) setTasks(JSON.parse(t));
		if (d) setData(JSON.parse(d));
	};

	const saveTasks = async (list: Task[]) => {
		setTasks(list);
		await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(list));
	};

	const saveData = async (obj: Record<string, DayEntry>) => {
		setData(obj);
		await AsyncStorage.setItem(DATA_KEY, JSON.stringify(obj));
	};

	const ensureDay = (date: string): DayEntry => ({
		tasks: Object.fromEntries(tasks.map((t) => [t.id, null])),
	});

	const markTask = async (date: string, taskId: string, value: Status) => {
		if (date !== today) return;

		const day = data[date] ?? ensureDay(date);
		if (day.tasks[taskId] !== null) return;

		await saveData({
			...data,
			[date]: {
				tasks: { ...day.tasks, [taskId]: value },
			},
		});
	};

	const addTask = async (task: Task) => {
		await saveTasks([...tasks, task]);
	};

	return {
		tasks,
		data,
		addTask,
		markTask,
	};
}
