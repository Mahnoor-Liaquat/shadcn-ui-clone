const quizData = [
    {
      question: "What does JSX stand for?",
      answers: [
        { text: "JavaScript XML", isCorrect: true },
        { text: "JavaScript Extension", isCorrect: false },
        { text: "JavaScript Syntax XML", isCorrect: false },
        { text: "JavaScript XHTML", isCorrect: false }
      ]
    },
    {
      question: "Which of the following is a correct way to define a component in React?",
      answers: [
        { text: "class MyComponent extends Component { }", isCorrect: false },
        { text: "funct MyComponent() { }", isCorrect: false },
        { text: "const MyComponent = () => { }", isCorrect: true },
        { text: "All of the above", isCorrect: false }
      ]
    },
    {
      question: "What hook can be used to manage state in a functional component?",
      answers: [
        { text: "useState", isCorrect: true },
        { text: "useEffect", isCorrect: false },
        { text: "useReducer", isCorrect: false },
        { text: "useContext", isCorrect: false }
      ]
    },
    {
      question: "In React, props are:",
      answers: [
        { text: "Immutable", isCorrect: true },
        { text: "Mutable", isCorrect: false },
        { text: "Constant", isCorrect: false },
        { text: "None of the above", isCorrect: false }
      ]
    },
    {
      question: "Which lifecycle method is invoked immediately after a component is mounted?",
      answers: [
        { text: "componentDidMount", isCorrect: true },
        { text: "componentWillMount", isCorrect: false },
        { text: "componentDidUpdate", isCorrect: false },
        { text: "render", isCorrect: false }
      ]
    }
  ];
  
export default quizData;