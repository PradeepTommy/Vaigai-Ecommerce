import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

function SplashScreen(props) {
	const [progress, setProgress] = useState(0.1);

	// Splash screen timer
	useEffect(() => {
		const timer = setTimeout(() => {
			if (progress < 1) {
				let data = progress + 0.1;
				setProgress(data);
			} else {
				props.navigation.navigate("Stacks", { screen: "Login" });
			}
		}, 300);

		return () => {
			if (progress > 1) {
				clearTimeout(timer);
			}
		};
	}, [progress, props]);

	return (
		<View style={styles.container}>
			<Text style={styles.splashText}>AGARIST</Text>
			<Progress.Bar progress={progress} width={200} color={"#841584"} />
		</View>
	);
}

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	splashText: {
		fontSize: 20,
		marginBottom: 10,
		fontWeight: "bold",
		color: "#841584",
	},
});
