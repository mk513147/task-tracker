import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "@/styles/calendar.styles";

type Props = {
	visible: boolean;
	value: string;
	onChange: (v: string) => void;
	onSave: () => void;
	onClose: () => void;
};

export function AddTaskModal({
	visible,
	value,
	onChange,
	onSave,
	onClose,
}: Props) {
	return (
		<Modal transparent visible={visible} animationType="fade">
			<View style={styles.overlay}>
				<View style={styles.addBox}>
					<Text style={styles.title}>New Task</Text>

					<TextInput
						value={value}
						onChangeText={onChange}
						placeholder="Task name"
						placeholderTextColor="#777"
						style={styles.input}
					/>

					<Pressable style={styles.save} onPress={onSave}>
						<Text style={styles.btnText}>Save</Text>
					</Pressable>

					<Pressable onPress={onClose}>
						<Text style={styles.close}>Cancel</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}
