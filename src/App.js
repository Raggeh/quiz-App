import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Quiz from "./Components/Quiz";
import Timer from "./Components/Timer";
import Start from "./Components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username, setUserName] = useState(null);

  const data =  [
    {
      id: 1,
      question: "Sanadkee ayuu ahaa markii ey Somaliya qadatay xornimada?",
      answers: [
        {
          text: " 26 June 1950-kii",
          correct: false,
        },
        {
          text: "26 July 1960-kii",
          correct: false,
        },
        {
          text: " 26 June 1960-kii",
          correct: true,
        },
        {
          text: " 26 July 1950-kii",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Sanadkee ayuu Madaxweyne Mohamed Siyad Barre lawareegay xilka? ",
      answers: [
        {
          text: " 1959-kii",
          correct: false,
        },
        {
          text: "1969-kii",
          correct: true,
        },
        {
          text: " 1964-kii",
          correct: false,
        },
        {
          text: " 1971-kii",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Kumuu ahaa Madaxweynihii 3-aad ee Soomaaliya?",
      answers: [
        {
          text: " Abdullahi Yusuf Ahmed",
          correct: false,
        },
        {
          text: "Mohamed Ali Samatar ",
          correct: false,
        },
        {
          text: " Mohamed Siyad Barre",
          correct: true,
        },
        {
          text: " Adan Abdulle Osman",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Magaaladee ayuu ku dhashay Madaxweyne Mohamed Siyad Barre?",
      answers: [
        {
          text: " Mogadishu",
          correct: false,
        },
        {
          text: "Beled Xaawo",
          correct: false,
        },
        {
          text: " Baydhabo",
          correct: false,
        },
        {
          text: " Garbahaareey",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question:
        " Sanadkee ayuu ahaa markii ladhisay ururkii Soomaaliyeed ee SYL?",
      answers: [
        {
          text: " 1950-kii",
          correct: false,
        },
        {
          text: " 1941-kii",
          correct: false,
        },
        {
          text: " 1943-kii",
          correct: false,
        },
        {
          text: " 1949-kii",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Sanadkee ayaa si rasmi ah loo qoray farta Soomaaliga ah?",
      answers: [
        {
          text: " 1972",
          correct: true,
        },
        {
          text: "1922",
          correct: false,
        },
        {
          text: " 1973",
          correct: false,
        },
        {
          text: " 1961",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Sanadkee ayuu dhashay Sayid Mohamed Abdulle Hassan?",
      answers: [
        {
          text: " 1899-kii",
          correct: false,
        },
        {
          text: "1920-kii",
          correct: false,
        },
        {
          text: " 1850",
          correct: false,
        },
        {
          text: " 1856-kii",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Sanadkee ayuu ahaa markii ey geeriyootay Hawo Tako?",
      answers: [
        {
          text: " 1920-kii",
          correct: false,
        },
        {
          text: "1939-kii",
          correct: false,
        },
        {
          text: "1948-kii",
          correct: true,
        },
        {
          text: " 1899-kii",
          correct: false,
        },
      ],
    },
  ];

  const moneyRewards = useMemo(()=>
           [
             { id: 1, amount: 100 },
             { id: 2, amount: 200 },
             { id: 3, amount: 300 },
             { id: 4, amount: 400 },
             { id: 5, amount: 500 },
             { id: 6, amount: 600 },
             { id: 7, amount: 700 },
             { id: 8, amount: 800 },
           ].reverse(),
  [])
  

  useEffect(() => {
    questionNumber > 1 &&
    setEarned(moneyRewards.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyRewards,questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="earnedText"> Waxaad heshay {earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="reward">
            <ul className="rewardMoneyList">
              {moneyRewards.map((mlist) => (
                <li
                  className={
                    questionNumber === mlist.id
                      ? "rewardMoneyListItem active"
                      : "rewardMoneyListItem"
                  }
                >
                  <span className="questionNumber">{mlist.id}</span>
                  <span className="rewardAmountNumber"> {mlist.amount} </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start  setUserName={setUserName}/>
      )}
    </div>
  );
}

export default App;
