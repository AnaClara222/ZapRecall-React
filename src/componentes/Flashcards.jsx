import CARTAS from "../mock";
import { useState } from "react";
import CardFrente from "./CardFrente";
import CardPergunta from "./CardPergunta";
import CardResposta from "./CardResposta";

export default function Flashcards({ setRespondidas }) {
  const [estadosCartas, setEstadosCartas] = useState(
    CARTAS.map(() => "frente")
  );
  const [resultadosCartas, setResultadosCartas] = useState(
    CARTAS.map(() => null)
  );

  function atualizarRespondidas(novosEstados) {
    const total = novosEstados.filter(e => e === "concluida").length;
    setRespondidas(total);
  }

  return (
    <>
      {CARTAS.map((carta, index) => {
        const estado = estadosCartas[index];

        if (estado === "frente") {
          return (
            <CardFrente
              key={index}
              numero={carta.pergunta}
              aoClicar={() => {
                const novosEstados = [...estadosCartas];
                novosEstados[index] = "pergunta";
                setEstadosCartas(novosEstados);
              }}
            />
          );
        }

        if (estado === "pergunta") {
          return (
            <CardPergunta
              key={index}
              pergunta={carta.question}
              aoVirar={() => {
                const novosEstados = [...estadosCartas];
                novosEstados[index] = "resposta";
                setEstadosCartas(novosEstados);
              }}
            />
          );
        }

        if (estado === "resposta") {
          return (
            <CardResposta
              key={index}
              resposta={carta.answer}
              aoFinalizar={(resultado) => {
                const novosEstados = [...estadosCartas];
                const novosResultados = [...resultadosCartas];

                novosEstados[index] = "concluida";
                novosResultados[index] = resultado;

                setEstadosCartas(novosEstados);
                setResultadosCartas(novosResultados);

                atualizarRespondidas(novosEstados); 
              }}
            />
          );
        }

        if (estado === "concluida") {
          const resultado = resultadosCartas[index];

          let cor;
          if (resultado === "naoLembrou") cor = "#FF3030";
          else if (resultado === "quaseLembrou") cor = "#FF922E";
          else if (resultado === "zap") cor = "#2FBE34";

          return (
            <CardFrente
              key={index}
              numero={carta.pergunta}
              concluida
              corTexto={cor}
              resultado={resultado}
              aoClicar={() => {}}
            />
          );
        }
      })}
    </>
  );
}