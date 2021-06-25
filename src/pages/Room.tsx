import LogoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/room.scss";

export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={LogoImg} alt="Letmeask" />
          <div>codigo</div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>SalaReact</h1>
          <span>4 asks</span>
        </div>

        <form>
          <textarea placeholder="Diga oque que gostaria de perguntar:" />
          <div className="form-footer">
            <span>
              Parta enviar sua pergunta, <button>faça seu login.</button>
              <Button type="submit">Enviar pergunta</Button>
            </span>
          </div>
        </form>
      </main>
    </div>
  );
}
