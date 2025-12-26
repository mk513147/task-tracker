import { FlatList, Pressable, Text, View } from "react-native";
import { styles, CELL_HEIGHT, CELL_WIDTH } from "@/styles/calendar.styles";

type Props = {
	days: (string | null)[];
	selectedDate: string | null;
	today: string;
	onSelect: (date: string) => void;
};

export function CalendarGrid({ days, selectedDate, today, onSelect }: Props) {
	return (
		<FlatList
			data={days}
			numColumns={7}
			scrollEnabled={false}
			keyExtractor={(_, i) => i.toString()}
			renderItem={({ item }) => {
				if (!item) {
					return <View style={[styles.cell, { opacity: 0 }]} />;
				}

				return (
					<Pressable
						style={[
							styles.cell,
							item === today && styles.todayCell,
							item === selectedDate && styles.selectedCell,
						]}
						onPress={() => onSelect(item)}
					>
						<Text style={styles.dateText}>{item.split("-")[2]}</Text>
					</Pressable>
				);
			}}
		/>
	);
}
