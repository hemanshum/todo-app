import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Checkbox } from "react-native-paper";

const TodoCardComponent = ({ item, todoDone, deleteTodo }) => {
  return (
    <View style={styles.todoCard}>
      <View style={styles.todoContent}>
        <Checkbox.Item
          label={item.todo}
          status={item.done ? "checked" : "unchecked"}
          onPress={todoDone}
        />
      </View>
      <View style={styles.deleteBtnContainer}>
        <Button icon="delete" mode="text" color="tomato" onPress={deleteTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoCard: {
    borderRadius: 6,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    elevation: 8,
  },
  todoContent: {
    flex: 7,
  },
  deleteBtnContainer: {
    flex: 1,
  },
});

export default TodoCardComponent;
