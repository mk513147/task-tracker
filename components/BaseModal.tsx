import { styles } from "@/styles/calendar.styles";
import { BlurView } from "expo-blur";
import { useEffect, useRef } from "react";
import { Animated, Dimensions, Modal, Pressable, View } from "react-native";

type Placement = "bottom" | "center" | "top";
type Animation = "fade" | "slide" | "none";

type BaseModalProps = {
	visible: boolean;
	onClose: () => void;
	placement?: Placement;
	animation?: Animation;
	children: React.ReactNode;
};

export function BaseModal({
	visible,
	onClose,
	placement = "bottom",
	animation = "none",
	children,
}: BaseModalProps) {
	const screenHeight = Dimensions.get("window").height;
	const translateY = useRef(new Animated.Value(screenHeight)).current;
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (!visible) return;

		if (animation === "fade") {
			translateY.setValue(0);
			opacity.setValue(0);
		}

		if (animation === "slide") {
			translateY.setValue(screenHeight);
			opacity.setValue(1);
		}

		if (animation === "fade") {
			Animated.timing(opacity, {
				toValue: 1,
				duration: 200,
				useNativeDriver: true,
			}).start();
		}

		if (animation === "slide") {
			Animated.spring(translateY, {
				toValue: 0,
				useNativeDriver: true,
			}).start();
		}
	}, [visible, animation]);

	return (
		<Modal
			transparent
			visible={visible}
			onRequestClose={onClose}
			animationType={animation}
		>
			{/* BACKDROP */}
			<Pressable style={{ flex: 1 }} onPress={onClose}>
				<Animated.View
					style={{
						flex: 1,
						opacity,
					}}
				>
					<BlurView intensity={90} tint="dark" style={{ flex: 1 }} />
					<View style={styles.dimOverlay} />
				</Animated.View>
			</Pressable>

			{/* CONTENT */}
			<Animated.View
				style={[
					styles.sheet,
					placement === "center" && styles.centerSheet,
					placement === "top" && styles.topSheet,
					{ transform: [{ translateY }] },
				]}
			>
				{children}
			</Animated.View>
		</Modal>
	);
}
