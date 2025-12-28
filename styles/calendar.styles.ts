import {
	BookOpen,
	Brain,
	CheckSquare,
	Dumbbell,
	Flame,
	HeartPulse,
} from "lucide-react-native";
import { Dimensions, StyleSheet } from "react-native";

/* ============================================================================
 * ICON CONFIG
 * ========================================================================== */

export const ICONS = {
	exercise: Dumbbell,
	study: BookOpen,
	focus: Brain,
	habit: Flame,
	health: HeartPulse,
	default: CheckSquare,
};

/* ============================================================================
 * LAYOUT CONSTANTS
 * ========================================================================== */

const SCREEN_HEIGHT = Dimensions.get("window").height;
const HEADER_HEIGHT = 120;
const GRID_HEIGHT = SCREEN_HEIGHT - HEADER_HEIGHT;
const ROWS = 6;

export const CELL_WIDTH = Dimensions.get("window").width / 7;
export const CELL_HEIGHT = GRID_HEIGHT / ROWS;

/* ============================================================================
 * STYLES
 * ========================================================================== */

export const styles = StyleSheet.create({
	/* ------------------------------------------------------------------------
	 * APP ROOT / SAFE AREA
	 * --------------------------------------------------------------------- */

	container: {
		flex: 1,
		backgroundColor: "#0b1220",
		paddingTop: 12,
	},

	safe: {
		flex: 1,
		backgroundColor: "#0b1220",
	},

	/* ------------------------------------------------------------------------
	 * HEADER (MONTH + WEEKDAYS)
	 * --------------------------------------------------------------------- */

	headerArea: {
		paddingVertical: 8,
		marginTop: 12,
		marginBottom: 4,
	},

	monthRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 16,
	},

	monthText: {
		fontSize: 18,
		fontWeight: "700",
		color: "#e5e7eb",
		textAlign: "center",
	},

	weekRow: {
		marginTop: 12,
		flexDirection: "row",
	},

	weekText: {
		flex: 1,
		textAlign: "center",
		color: "#9ca3af",
		fontSize: 12,
	},

	/* ------------------------------------------------------------------------
	 * CALENDAR GRID
	 * --------------------------------------------------------------------- */

	gridArea: {
		flex: 1,
	},

	cell: {
		width: CELL_WIDTH,
		height: CELL_HEIGHT,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 6,
		borderWidth: 0.5,
		borderColor: "#36363897",
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

	/* ------------------------------------------------------------------------
	 * FLOATING ACTION BUTTON
	 * --------------------------------------------------------------------- */

	fab: {
		position: "absolute",
		bottom: 24,
		right: 24,
		backgroundColor: "#6d28d9",
		padding: 18,
		borderRadius: 999,
		zIndex: 10,
		elevation: 10,
	},

	/* ------------------------------------------------------------------------
	 * MODAL BACKDROP & BLUR
	 * --------------------------------------------------------------------- */

	backdrop: {
		flex: 1,
	},

	blur: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
	},

	dimOverlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.45)",
	},

	/* ------------------------------------------------------------------------
	 * MODAL SHEETS (BOTTOM / CENTER / TOP)
	 * --------------------------------------------------------------------- */

	sheet: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		backgroundColor: "#111827",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 16,
	},

	centerSheet: {
		alignSelf: "center",
		top: "35%",
		height: SCREEN_HEIGHT * 0.3,
		width: "90%",
		borderRadius: 16,
	},

	topSheet: {
		top: 0,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},

	/* ------------------------------------------------------------------------
	 * MODAL CONTENT (TEXT / TASKS)
	 * --------------------------------------------------------------------- */

	title: {
		fontSize: 18,
		fontWeight: "700",
		color: "#e5e7eb",
		marginBottom: 12,
	},

	taskRow: {
		marginBottom: 14,
	},

	taskLeft: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},

	taskText: {
		color: "#e5e7eb",
	},

	statusText: {
		marginTop: 6,
		fontSize: 13,
		color: "#9ca3af",
	},

	/* ------------------------------------------------------------------------
	 * TASK ACTION BUTTONS
	 * --------------------------------------------------------------------- */

	actions: {
		flexDirection: "row",
		gap: 8,
		marginTop: 6,
	},

	btn: {
		flex: 1,
		padding: 8,
		borderRadius: 6,
		alignItems: "center",
	},

	yes: {
		backgroundColor: "#16a34a",
	},

	no: {
		backgroundColor: "#dc2626",
	},

	btnText: {
		color: "white",
		fontWeight: "600",
	},

	yesText: {
		color: "#22c55e",
	},

	noText: {
		color: "#ef4444",
	},

	pendingText: {
		color: "#9ca3af",
	},

	/* ------------------------------------------------------------------------
	 * ADD TASK MODAL
	 * --------------------------------------------------------------------- */

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
		backgroundColor: "#3d3f3fbd",
		color: "#ffffffff",
		padding: 12,
		borderRadius: 8,
		alignItems: "center",
	},

	/* ------------------------------------------------------------------------
	 * NAVIGATION / ARROWS
	 * --------------------------------------------------------------------- */

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
