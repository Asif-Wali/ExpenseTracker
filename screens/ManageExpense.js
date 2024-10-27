import { useLayoutEffect, useContext,  } from "react";
import { ExpenseContext } from "../store/expense-context";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/colors";
import Button from "../components/UI/Button";

function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route?.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const expensesCtx= useContext(ExpenseContext);
  useLayoutEffect (() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function expenseDeleteHandler() {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack();
  }
  
  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if(isEditing){
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Updated Expense",
        amount: 786,
        date: new Date(),
      })
    }
    else{
      expensesCtx.addExpense({
        description: "New Expense Placeholder",
        amount: 123,
        date: new Date(),
      })
      
    }
  
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={cancelHandler} mode={"flat"}>
          Cancel
        </Button>
        <Button style={styles.button}  onPress={confirmHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={expenseDeleteHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button:{
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
export default ManageExpenseScreen;
