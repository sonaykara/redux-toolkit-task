import styled from "styled-components";
import "../Main.css";
import { useDispatch } from "react-redux";
import { removeItem, updateDataId, updateStatus } from "../Store/Features/Task";

const ButtonCard = styled.button`
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

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 37.5rem;
  height: 15.5rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
`;

function TaskCard({ data, setModal }) {
  const dispatch = useDispatch();

  function deleteHandler() {
    dispatch(removeItem(data.id));
  }

  return (
    <CardWrapper>
      <div>
        <h1>{data.task}</h1>
        <p>{data.status}</p>
        <p>{data.date}</p>
      </div>
      <ButtonArea>
        <ButtonCard
          className="btn-primary"
          onClick={() => {
            dispatch(updateDataId(data.id));
            setModal(true);
          }}
        >
          Edit
        </ButtonCard>
        <ButtonCard
          onClick={() => {
            const newStatus =
              data.status === "Devam Ediyor" ? "Tamamlandı" : "Devam Ediyor";
            dispatch(updateStatus({ taskId: data.id, newStatus }));
          }}
          className="btn-primary"
        >
          {data.status === "Devam Ediyor" ? "Tamamla" : "Geri Al"}
        </ButtonCard>

        <ButtonCard onClick={() => deleteHandler()} className="btn-danger">
          Delete{" "}
        </ButtonCard>
      </ButtonArea>
    </CardWrapper>
  );
}

export default TaskCard;
