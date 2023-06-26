import React, { useEffect, useState } from "react";
// import "./CountdownTimer.css";

const CountdownTimer = ({ dropDate }) => {
  // Estado
  const [timerString, setTimerString] = useState("");

  // Nosso useEffect será executado no carregamento do componente
  useEffect(() => {
    console.log("Configurando o intervalo...");

    // Use setInterval para executar este pedaço de código a cada segundo
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = dropDate - currentDate;

      // Aqui é tão fácil quanto fazer algumas contas de tempo para obter as diferentes propriedades
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Temos nosso output desejado, defina-o no estado!
      setTimerString(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // Se a nossa distância passar de zero isso significa que é hora do drop!
      if (distance < 0) {
        console.log("Limpando o intervalo...");
        clearInterval(interval);
      }
    }, 1000);

    // Sempre que nosso componente for desmontado, vamos limpar nosso intervalo
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div className="timer-container">
      <p className="timer-header">Candy Drop Iniciando Em</p>
      {timerString && <p className="timer-value">{`⏰ ${timerString}`}</p>}
    </div>
  );
};

export default CountdownTimer;
