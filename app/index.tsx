import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useRef, useState } from "react";
import { Animated, Dimensions, Easing } from "react-native";

import { Plus } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { AddTaskModal } from "../components/AddTaskModal";
import { CalendarGrid } from "../components/CalendarGrid";
import { DayModal } from "../components/DayModal";
import { useCalendar } from "../hooks/useCalendar";
import { useTasks } from "../hooks/useTasks";
import { styles } from "../styles/calendar.styles";
import { toDateKey } from "../utils/calendar";

export default function Home() {
	const { currentDate, days, goNextMonth, goPrevMonth } = useCalendar();
	const { tasks, data, addTask, markTask } = useTasks();

	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [dayModal, setDayModal] = useState(false);
	const [addTaskModal, setAddTaskModal] = useState(false);
	const [newTask, setNewTask] = useState("");

	const TODAY_KEY = toDateKey(new Date());
	const screenWidth = Dimensions.get("window").width;
	const translateX = useRef(new Animated.Value(0)).current;

	const animateMonth = (direction: "next" | "prev", action: () => void) => {
		const toValue = direction === "next" ? -screenWidth : screenWidth;

		Animated.timing(translateX, {
			toValue,
			duration: 250,
			easing: Easing.out(Easing.cubic),
			useNativeDriver: true,
		}).start(() => {
			translateX.setValue(direction === "next" ? screenWidth : -screenWidth);
			action();

			Animated.timing(translateX, {
				toValue: 0,
				duration: 250,
				easing: Easing.out(Easing.cubic),
				useNativeDriver: true,
			}).start();
		});
	};

	return (
		<SafeAreaView style={styles.safe}>
			<StatusBar style="light" />

			{/* HEADER AREA */}
			<View style={styles.headerArea}>
				<View style={styles.monthRow}>
					<Pressable onPress={() => animateMonth("prev", goPrevMonth)}>
						<ChevronLeft color="white" size={28} />
					</Pressable>

					<Text style={styles.monthText}>
						{currentDate.toLocaleString("default", {
							month: "long",
							year: "numeric",
						})}
					</Text>

					<Pressable onPress={() => animateMonth("next", goNextMonth)}>
						<ChevronRight color="white" size={28} />
					</Pressable>
				</View>

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
				<Animated.View
					style={{
						flex: 1,
						transform: [{ translateX }],
					}}
				>
					<CalendarGrid
						days={days}
						today={TODAY_KEY}
						selectedDate={selectedDate}
						onSelect={(d) => {
							setSelectedDate(d);
							setDayModal(true);
						}}
					/>
				</Animated.View>
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
