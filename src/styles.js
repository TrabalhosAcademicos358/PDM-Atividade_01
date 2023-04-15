import { StyleSheet } from "react-native";


const colorPrimary = "#FDFCFE"
const colorSecondary = "#6B6B6B"
const colorTertiary = "#31CF67"
const colorQuartetary = "#E23C44"
const white = "#ffffff"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      // backgroundColor: "#fff",
      paddingVertical: 75,
      paddingHorizontal: 24,
      gap: 34
    },
    card: {
      flexDirection: "row",
      backgroundColor: "gray",
      borderRadius: 15,
      gap: 10,
      justifyContent: "space-between",
      width: 250
    },
    cardView: {
      flexDirection: "row",
      gap: 7,
    },
    date: {
      fontSize: 16,
      color: "#6B6B6B"
    },
    title: {
      color: "#FDFCFE",
      fontWeight: "bold",
      fontSize: 24
    },
    titleSecondary: {
      color: "#FDFCFE",
      fontSize: 20,
      fontWeight: "bold"
    },
    paragraph: {
      color: "#FDFCFE",
      fontSize: 14,
      textAlign: "center",
      marginTop: 28
    },
    input: {
      backgroundColor: "#1F1E25",
      backgroundColor: "#fff", // Temp
      borderRadius: 4,
      width: "83%", // Está uma droga, colocar automatico depois
      height: 56,
    },
    button: {
      color: "#FDFCFE",
      height: 56,
      width: 56,
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center"
    },
  });
  