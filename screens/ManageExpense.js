import { useLayoutEffect, useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/colors";
import Button from "../components/UI/Button";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route?.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const expensesCtx = useContext(ExpenseContext);
  const selectedexpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function expenseDeleteHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }

    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        submitButtonlabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedexpense}
      />
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
export default ManageExpenseScreen;
