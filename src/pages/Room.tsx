import LogoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/room.scss";
import { RoomCode } from "../components/RoomCode";
import { useParams } from "react-router-dom";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={LogoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>SalaReact</h1>
          <span>4 Perguntas</span>
        </div>

        <form>
          <textarea placeholder="Diga oque que gostaria de perguntar:" />
          <div className="form-footer">
            <span>
              Parta enviar sua pergunta, <button>faça seu login.</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
