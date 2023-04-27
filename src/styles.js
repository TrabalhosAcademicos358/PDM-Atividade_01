import { StyleSheet } from "react-native";

export const colors = {
  background: "#131016",
  primary: "#FDFCFE",
  white: "#fff",
  secondary: "#6B6B6B"
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 75,
    paddingHorizontal: 24,
    gap: 34
  },
  containerCenter: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
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
    color: colors.secondary
  },
  title: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 24
  },
  titleSecondary: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold"
  },
  paragraph: {
    color: colors.primary,
    fontSize: 14,
    textAlign: "center",
    marginTop: 28
  },
  box: {
    backgroundColor: "#1F1E25",
    color: colors.white,
    borderRadius: 4,
    width: "83%",
    paddingLeft: 16,
    height: 56,
    justifyContent: "center"
  },
  button: {
    color: colors.primary,
    height: 56,
    width: 56,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
});
  
export const stylesModal = StyleSheet.create({
  button: {
    height: 50,
    width: "50%",
    borderTopWidth: 0.5,
    borderColor: "#3C3C435C",
  },
  buttonPrimary: {
    borderRightWidth: 0.25,
    borderTopEndRadius: 0,
    borderBottomLeftRadius: 16
  },
  buttonSecondary: {
    borderLeftWidth: 0.25,
    borderTopStartRadius: 0,
    borderBottomRightRadius: 16
  },
  textButton: {
    fontSize: 17,
    color: "#007AFF"
  },
  textView: {
    marginVertical: 19,
    gap: 2
  },
  text: {
    textAlign: "center",
    fontSize: 13,
  },
  textTitle: {
    fontWeight: 700,
    fontSize: 17,
  },
  modalView: {
    backgroundColor: "#F2F2F2",
    width: 270,
    borderRadius: 14,
  }
})