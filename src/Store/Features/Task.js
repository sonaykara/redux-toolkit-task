import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
  modal: false,
  dataId : null,

};

export const taskSlice = createSlice({
  name: "taskSlicer",
  initialState,
  reducers: {
    updateTask: (state, action) => {
      state.task.push(action.payload);
    },
    updateModal: (state, action) => {
      state.modal = action.payload;
    },

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.task = state.task.filter((item) => item.id !== itemIdToRemove);
    },
    updateStatus: (state, action) => {
        const { taskId, newStatus } = action.payload;
        state.task = state.task.map((task) => {
          if (task.id === taskId) {
            return { ...task, status: newStatus };
          }
          return task;
        });
      },

      updateTaskName: (state, action) => {
        const { taskId, taskName } = action.payload;
        state.task = state.task.map((task) => {
          if (task.id === taskId) {
            return { ...task, task: taskName };
          }
          return task;
        });
      },
      updateDataId: (state, action) => {
        state.dataId = action.payload;
      },
   
  },
});

export const { updateTask, updateModal, removeItem, updateStatus , updateStatus2 , updateTaskName , updateDataId } =
  taskSlice.actions;

export default taskSlice.reducer;
