import styled from "styled-components";
import "../Main.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateTask } from "../Store/Features/Task";

const ButtonForm = styled.button`
  display: inline-block;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 1rem;
  outline: none;
  border: none;
  height: 3rem;
  width: 100%;
`;

const FromWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-size: 1.5rem;
`;

function TaskForm() {
  const [info, setInfo] = useState({
    task: "",
    status: "",
    date: "",
  });

  const [conroller , sertController] = useState(false)

  function taskChangeHandler(event) {
    setInfo((prevstate) => {
      return {
        ...prevstate,
        task: event.target.value,
      };
    });
  }

  function statusChangeHandler(event) {
    setInfo((prevstate) => {
      return {
        ...prevstate,
        status: event.target.value,
      };
    });
  }

  function dateChangeHandler(event) {
    setInfo((prevstate) => {
      return {
        ...prevstate,
        date: event.target.value,
      };
    });
  }

  function handleSubmit() {
   if(info.task.length !== 0 && info.status.length !== 0 && info.date.length  !== 0) {
    dispatch(updateTask({
      ...info , id :task.length +1
    }));
    sertController(false)
   }else{
    sertController(true)
   }
    setInfo({
      task: "",
      status: "",
      date: "",
    });
  }

  const { task } = useSelector((state) => state.taskSlicer);
  const dispatch = useDispatch();
  console.log(task);
  console.log(info);

  return (
    <FromWrapper>
      <div className="form-group">
        <div className="form-item">
          <label>Task</label>
          <input type="text" value={info.task} onChange={taskChangeHandler} placeholder="Task Name"></input>
        </div>

        <div className="form-item">
          <label>Choose Status</label>
          <select value={info.status} onChange={statusChangeHandler}>
            <option value="">Select Status</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Tamamlandı">Tamamlandı</option>
          </select>
        </div>

        <div className="form-item">
          <label>Date</label>
          <input type="date" value={info.date} onChange={dateChangeHandler} />
        </div>
      </div>
      <ButtonForm onClick={handleSubmit} className="btn-primary">Add</ButtonForm>
        {conroller && <p>Please Fill The Form</p>}
    </FromWrapper>
  );
}

export default TaskForm;
