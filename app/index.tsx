import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { useCalendar } from "../hooks/useCalendar";
import { useTasks } from "../hooks/useTasks";
import { CalendarGrid } from "../components/CalendarGrid";
import { DayModal } from "../components/DayModal";
import { AddTaskModal } from "../components/AddTaskModal";
import { styles } from "../styles/calendar.styles";
import { Plus } from "lucide-react-native";
import { View, Pressable, Text } from "react-native";
import { toDateKey } from "../utils/calendar";

export default function Home() {
	const { currentDate, days, goNextMonth, goPrevMonth } = useCalendar();
	const { tasks, data, addTask, markTask } = useTasks();

	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [dayModal, setDayModal] = useState(false);
	const [addTaskModal, setAddTaskModal] = useState(false);
	const [newTask, setNewTask] = useState("");

	const TODAY_KEY = toDateKey(new Date());

	return (
		<SafeAreaView style={styles.safe}>
			<StatusBar style="light" />

			{/* HEADER AREA */}
			<View style={styles.headerArea}>
				<Text style={styles.monthText}>
					{currentDate.toLocaleString("default", {
						month: "long",
						year: "numeric",
					})}
				</Text>

				<View style={styles.weekRow}>
					{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
						<Text key={d} style={styles.weekText}>
							{d}
						</Text>
					))}
				</View>
			</View>

			{/* CALENDAR GRID */}
			<View style={styles.gridArea}>
				<CalendarGrid
					days={days}
					today={TODAY_KEY}
					selectedDate={selectedDate}
					onSelect={(d) => {
						setSelectedDate(d);
						setDayModal(true);
					}}
				/>
			</View>

			{/* FAB */}
			<Pressable style={styles.fab} onPress={() => setAddTaskModal(true)}>
				<Plus color="white" />
			</Pressable>

			{/* MODALS stay here */}

			<DayModal
				visible={dayModal}
				date={selectedDate}
				tasks={tasks}
				today={TODAY_KEY}
				getStatus={(id) =>
					selectedDate ? data[selectedDate]?.tasks?.[id] ?? null : null
				}
				onMark={(id, v) => selectedDate && markTask(selectedDate, id, v)}
				onClose={() => setDayModal(false)}
			/>

			<AddTaskModal
				visible={addTaskModal}
				value={newTask}
				onChange={setNewTask}
				onSave={() => {
					addTask({
						id: Date.now().toString(),
						label: newTask,
						icon: "default",
					});
					setNewTask("");
					setAddTaskModal(false);
				}}
				onClose={() => setAddTaskModal(false)}
			/>
		</SafeAreaView>
	);
}
