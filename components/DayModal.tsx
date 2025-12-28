import { BaseModal } from "@/components/BaseModal";
import { ICONS, styles } from "@/styles/calendar.styles";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Status, Task } from "../types/calendar";

type Props = {
	visible: boolean;
	date: string | null;
	tasks: Task[];
	getStatus: (taskId: string) => Status;
	onMark: (taskId: string, value: Status) => void;
	onClose: () => void;
	today: string;
};

export function DayModal({
	visible,
	date,
	tasks,
	getStatus,
	onMark,
	onClose,
	today,
}: Props) {
	return (
		<BaseModal
			visible={visible}
			onClose={onClose}
			placement="bottom"
			animation="slide"
		>
			<Text style={styles.title}>{date}</Text>

			<ScrollView showsVerticalScrollIndicator={false}>
				{tasks.map((task) => {
					const Icon = ICONS[task.icon];
					const status = getStatus(task.id);

					return (
						<View key={task.id} style={styles.taskRow}>
							<View style={styles.taskLeft}>
								<Icon size={16} color="#e5e7eb" />
								<Text style={styles.taskText}>{task.label}</Text>
							</View>

							{date === today && status === null ? (
								<View style={styles.actions}>
									<Pressable
										style={[styles.btn, styles.yes]}
										onPress={() => onMark(task.id, "YES")}
									>
										<Text style={styles.btnText}>YES</Text>
									</Pressable>
									<Pressable
										style={[styles.btn, styles.no]}
										onPress={() => onMark(task.id, "NO")}
									>
										<Text style={styles.btnText}>NO</Text>
									</Pressable>
								</View>
							) : (
								<Text style={styles.statusText}>
									{status === "YES"
										? "Completed"
										: status === "NO"
										? "Not Completed"
										: "Not marked"}
								</Text>
							)}
						</View>
					);
				})}
			</ScrollView>

			<Pressable onPress={onClose}>
				<Text style={styles.close}>Close</Text>
			</Pressable>
		</BaseModal>
	);
}
