import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {updateTaskName ,  } from "../Store/Features/Task";
import { useState } from "react";

const ModalWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 37.5rem;
height: 15.5rem;
background-color: white;
border: 1px solid white;
border-radius: 15px;
width: 100vh;
height: 400px;
`;

const ModalItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 400px;
gap: 50px;
`;

const ModalButtonArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 200px;
gap: 50px;
`;

const Header = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;

gap: 50px;
`;

const ButtonModal = styled.button`
display: inline-block;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 10px;
display: block;
outline: none;
border: none;
`;


function EditModal({data , setModal}) {
  const dispatch = useDispatch()

  const handleClose = (boolen) => {
    setModal(boolen);
  }
  const [taskName , setTaskName] = useState(data.task || "")
  console.log(data)

  const {dataId} = useSelector(state => state.taskSlicer)
  const handleUpdate = () => {
    dispatch(updateTaskName({ taskId: dataId, taskName }));
    handleClose(false);
  };

  return (
    <ModalWrapper>
      <ModalItems>
        <Header>
          <h1>Update Task Name</h1>
          <FaTimes onClick={() => handleClose(false)} />
        </Header>
        <div className="area-flex">
          <label>New Task Name</label>
          <input onChange={e => setTaskName(e.target.value)} type="text" value={taskName} />
        </div>
        <ModalButtonArea>
          <ButtonModal className="btn-danger">Cancel</ButtonModal>
          <ButtonModal onClick={handleUpdate} className="btn-primary">Update</ButtonModal>
        </ModalButtonArea>
      </ModalItems>
    </ModalWrapper>
  );
}

export default EditModal;
