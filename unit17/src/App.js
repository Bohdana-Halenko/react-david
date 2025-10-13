import React, { useState, useEffect } from "react";

function App() {
  const startTime = 10; // секунд
  const [timeLeft, setTimeLeft] = useState(startTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }

    // Якщо час вийшов — зупиняємо таймер
    if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(startTime);
  };

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 12,
        background: "#f5f5f5",
        width: 260,
        textAlign: "center",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h3>🧘‍♀️ Таймер концентрації</h3>

      <div
        style={{
          fontSize: "2.4rem",
          fontFamily: "monospace",
          margin: "12px 0"
        }}
      >
        {timeLeft}s
      </div>

      {timeLeft === 0 ? (
        <p style={{ color: "#d32f2f", fontWeight: "bold" }}>⏰ Час вийшов!</p>
      ) : (
        <p style={{ color: "#666" }}>
          {isActive ? "Таймер працює..." : "Готовий до старту!"}
        </p>
      )}

      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {!isActive ? (
          <button onClick={handleStart}>▶️ Старт</button>
        ) : (
          <button onClick={handlePause}>⏸ Пауза</button>
        )}
        <button onClick={handleReset}>🔁 Скинути</button>
      </div>
    </div>
  );
}

export default App;
