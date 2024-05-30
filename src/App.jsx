import { useSelector } from "react-redux";
import TaskCard from "./Components/TaskCard";
import TaskForm from "./Components/TaskForm";
import styled from "styled-components";
import { useState } from "react";
import EditModal from "./Components/EditModal";
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 100%;
`;

const ModalArea = styled.div`
 position: absolute;
 z-index: 99999999;

`;

const TaskWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  width: 100%;
  height: 100%;
`;


function App() {
  const [modal , setModal] = useState(false)
  const {task } = useSelector(state => state.taskSlicer)
  console.log(task)
  return (
    <AppWrapper>
      <div>Redux Toolkit Crud</div>
      <TaskForm></TaskForm>
      <TaskWrapper>
      {task.length > 0 && task.map((taskItem, index) => <TaskCard key={index} data={taskItem} setModal={setModal}></TaskCard>)}
      </TaskWrapper>
      { modal   && <ModalArea><EditModal data = {task} setModal = {setModal}></EditModal></ModalArea>}
    </AppWrapper>
  );
}

export default App;
