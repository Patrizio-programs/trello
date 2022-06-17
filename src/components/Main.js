import "./Main.css";
import Board from "react-trello";

function Main() {
  let data = {
    lanes: [
      {
        cards: [
          {
            description: "Your Task here",
            id: "open",
            label: "Your label",
            laneId: "open",
            title: "Task Title",
            style: {
              backgroundColor: "white",
            },
          },
        ],
        currentPage: 1,
        id: "open",
        label: "",
        style: {
          width: 300,
          color: "white",
          backgroundColor: "#CE8964",
        },
        title: "To Do",
      },
      {
        cards: [],
        currentPage: 1,
        id: "BLOCKED",
        label: "",
        style: {
          width: 300,
          color: "white",
          backgroundColor: "#CE8964",
        },
        title: "Doing",
      },
      {
        cards: [],
        currentPage: 1,
        id: "COMPLETED",
        label: "",
        style: {
          width: 300,
          color: "white",
          backgroundColor: "#CE8964",
        },
        title: "Done",
      },
    ],
  };

  return (
    <div className="main">
      <div className="main-tasks">
        <Board
          id="EditableBoard1"
          className="board"
          data={data}
          draggable
          droppable
          handleDragEnd={function noRefCheck() {}}
          handleDragStart={function noRefCheck() {}}
          handleLaneDragEnd={function noRefCheck() {}}
          handleLaneDragStart={function noRefCheck() {}}
          onCardMoveAcrossLanes={function noRefCheck() {}}
          editable
          onCardAdd={function noRefCheck() {}}
          onCardClick={function noRefCheck() {}}
          onCardDelete={function noRefCheck() {}}
          onDataChange={function noRefCheck() {}}
          style={{
            fontFamily: "Verdana",
            padding: "30px 20px",
            background: "transparent",
            display: "flex",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default Main;
