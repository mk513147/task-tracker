import { BaseModal } from "@/components/BaseModal";
import { styles } from "@/styles/calendar.styles";
import { Pressable, Text, TextInput } from "react-native";

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
		<BaseModal
			visible={visible}
			onClose={onClose}
			placement="center"
			animation="fade"
		>
			<Text style={styles.title}>Add Task</Text>

			<TextInput
				value={value}
				onChangeText={onChange}
				placeholder="Task name"
				placeholderTextColor="#9ca3af"
				style={styles.input}
			/>

			<Pressable style={styles.save} onPress={onSave}>
				<Text>Save</Text>
			</Pressable>
			<Pressable style={styles.close} onPress={onClose}>
				<Text>Close</Text>
			</Pressable>
		</BaseModal>
	);
}
