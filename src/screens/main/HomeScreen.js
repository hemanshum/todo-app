import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, FlatList } from "react-native";
import { ActivityIndicator, Caption, TextInput } from "react-native-paper";

import {
  todoDone,
  fetchTodos,
  addTodo,
  deleteTodo,
} from "../../store/actions/todoActions";

import TodoCardComponent from "../../components/TodoCardComponent";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { todos: todoList, isLoading } = useSelector((state) => state.todo);
  const [inputText, setInputText] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const renderedItems = ({ item }) => (
    <TodoCardComponent
      todoDone={() =>
        dispatch(todoDone({ todoId: item.objectId, done: item.done }))
      }
      deleteTodo={() => dispatch(deleteTodo(item.objectId))}
      item={item}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInputStyle}
          label="Enter your task"
          value={inputText}
          onChangeText={setInputText}
          right={
            <TextInput.Icon
              name="checkbox-marked-circle-outline"
              color="#1DEAB6"
              onPress={() => {
                dispatch(addTodo(inputText));
                setInputText("");
              }}
            />
          }
        />
      </View>
      {isLoading && (
        <View style={styles.activityStyle}>
          <ActivityIndicator animating={true} />
          <Caption>loading...</Caption>
        </View>
      )}
      <FlatList
        style={styles.flatListStyle}
        data={todoList}
        keyExtractor={(item) => item.objectId}
        renderItem={renderedItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  textInputStyle: {
    backgroundColor: "#fff",
  },
  flatListStyle: {
    paddingBottom: 10,
  },
  activityStyle: {
    marginTop: 10,
    alignItems: "center",
  },
});

export default HomeScreen;
