import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors";

export default StyleSheet.create({
  textInput: {
    flex: 1,
    width:"100%"
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginVertical: 5,
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  inputContainer: {
    paddingVertical: 12,
    alignItems:"center"
    // borderWidth:2
  },
  textError: {
    color: colors.DANGER,
    paddingTop: 4,
    fontSize: 12,
  },
});
