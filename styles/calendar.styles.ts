import { Dimensions, StyleSheet } from "react-native";
import {
	Dumbbell,
	BookOpen,
	Brain,
	Flame,
	HeartPulse,
	CheckSquare,
} from "lucide-react-native";

export const ICONS = {
	exercise: Dumbbell,
	study: BookOpen,
	focus: Brain,
	habit: Flame,
	health: HeartPulse,
	default: CheckSquare,
};

const SCREEN_HEIGHT = Dimensions.get("window").height;
const HEADER_HEIGHT = 120;
const GRID_HEIGHT = SCREEN_HEIGHT - HEADER_HEIGHT;
const ROWS = 6;

export const CELL_WIDTH = Dimensions.get("window").width / 7;
export const CELL_HEIGHT = GRID_HEIGHT / ROWS;

export const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#0b1220", paddingTop: 12 },

	// monthText: {
	// 	color: "#e5e7eb",
	// 	fontSize: 18,
	// 	fontWeight: "700",
	// 	textAlign: "center",
	// 	marginBottom: 8,
	// },
	// safe: {
	// 	flex: 1,
	// 	backgroundColor: "#0b1220",
	// },

	// weekRow: {
	// 	flexDirection: "row",
	// },
	safe: {
		flex: 1,
		backgroundColor: "#0b1220",
	},

	headerArea: {
		paddingVertical: 8,
	},

	monthText: {
		fontSize: 18,
		fontWeight: "700",
		color: "#e5e7eb",
		textAlign: "center",
		marginBottom: 6,
	},

	weekRow: {
		flexDirection: "row",
	},

	weekText: {
		flex: 1,
		textAlign: "center",
		color: "#9ca3af",
		fontSize: 12,
	},

	gridArea: {
		flex: 1, // THIS IS CRITICAL
	},

	// weekText: {
	// 	width: CELL_WIDTH,
	// 	textAlign: "center",
	// 	color: "#9ca3af",
	// 	fontSize: 12,
	// 	marginBottom: 4,
	// },

	cell: {
		width: CELL_WIDTH,
		height: CELL_HEIGHT,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 6,
		borderWidth: 0.5,
		borderColor: "#111827",
	},

	todayCell: {
		borderColor: "#2563eb",
	},

	selectedCell: {
		backgroundColor: "#111827",
	},

	dateText: {
		color: "#e5e7eb",
		fontSize: 12,
	},

	// fab: {
	// 	position: "absolute",
	// 	bottom: 24,
	// 	right: 24,
	// 	backgroundColor: "#6d28d9",
	// 	padding: 18,
	// 	borderRadius: 999,
	// },
	fab: {
		position: "absolute",
		bottom: 24,
		right: 24,
		backgroundColor: "#6d28d9",
		padding: 18,
		borderRadius: 999,
		zIndex: 10,
		elevation: 10, // Android
	},

	sheet: {
		marginTop: "auto",
		backgroundColor: "#020617",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
		maxHeight: "85%",
	},

	title: {
		fontSize: 18,
		fontWeight: "700",
		color: "#e5e7eb",
		marginBottom: 12,
	},

	taskRow: { marginBottom: 14 },

	taskLeft: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},

	taskText: { color: "#e5e7eb" },

	actions: { flexDirection: "row", gap: 8, marginTop: 6 },

	btn: {
		flex: 1,
		padding: 8,
		borderRadius: 6,
		alignItems: "center",
	},

	yes: { backgroundColor: "#16a34a" },
	no: { backgroundColor: "#dc2626" },
	btnText: { color: "white", fontWeight: "600" },

	statusText: { marginTop: 6, fontSize: 13 },

	yesText: { color: "#22c55e" },
	noText: { color: "#ef4444" },
	pendingText: { color: "#9ca3af" },

	overlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.6)",
		justifyContent: "center",
		padding: 20,
	},

	addBox: {
		backgroundColor: "#020617",
		borderRadius: 12,
		padding: 20,
	},

	input: {
		borderWidth: 1,
		borderColor: "#334155",
		borderRadius: 8,
		padding: 12,
		color: "#e5e7eb",
		marginBottom: 12,
	},

	save: {
		backgroundColor: "#2563eb",
		padding: 12,
		borderRadius: 8,
		alignItems: "center",
	},

	close: {
		marginTop: 14,
		textAlign: "center",
		color: "#94a3b8",
	},

	monthHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		marginBottom: 8,
	},

	arrow: {
		fontSize: 28,
		color: "#e5e7eb",
	},
});
