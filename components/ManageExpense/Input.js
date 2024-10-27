import { Text, TextInput, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/colors";

function Input({ style, inValid, label, textInputConfig }) {
  const inputstyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputstyles.push(styles.inputMultiline);
  }
  if(inValid){
    inputstyles.push(styles.inValidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.inValidLabel]}>{label}</Text>
      <TextInput style={inputstyles} {...textInputConfig} />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  inValidLabel: {
color: GlobalStyles.colors.error500,
  },
  inValidInput: {
backgroundColor: GlobalStyles.colors.error50,
  },

});
export default Input;
