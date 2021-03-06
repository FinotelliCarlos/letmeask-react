import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomcodeToClipBoard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomcodeToClipBoard}>
      <div>
        <img src={copyImg} alt="" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
