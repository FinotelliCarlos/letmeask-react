import LogoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/room.scss";
import { RoomCode } from "../components/RoomCode";
import { useParams } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import { useEffect } from "react";
import { Question } from "../components/Question";
import { useRoom } from "../hooks/useRoom";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState("");
  const { questions, title } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }
    if (!user) {
      throw new Error("You must be logged in.");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={LogoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{" "}
              {questions.length > 1 ? "Perguntas" : "Pergunta"}
            </span>
          )}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}