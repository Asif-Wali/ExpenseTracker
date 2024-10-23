import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function IconButton({ name, color, size, onPress }) {
   

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    borrderRadius: 24,
    padding: 6,
    marginHorizontal: 12,
    marginVertical:2,
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.25,
  },
});
export default IconButton;
