import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, toggleTask }) => {
  return (
    <TouchableOpacity onPress={() => toggleTask(task.id)} style={[styles.task, task.done && styles.taskDone]}>
      <Text style={styles.taskText}>{task.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
    borderRadius: 5,
  },
  taskDone: {
    backgroundColor: '#d4edda',
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskItem;
