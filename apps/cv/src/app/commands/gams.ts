// commands/games.ts
import { useTerminal } from '../terminal/terminal.context';

let guessGameState: { target: number; attempts: number } | null = null;
let quizGameState: { questions: any[]; current: number; score: number } | null = null;

export const games = {
  guess: {
    run: async (args?: string[]) => {
      const term = useTerminal.getState();

      if (args?.[0] === 'reset') {
        guessGameState = null;
        await term.echo('🔄 Game reset! Start new game with: guess');
        return;
      }

      if (!guessGameState) {
        const target = Math.floor(Math.random() * 100) + 1;
        guessGameState = { target, attempts: 0 };
        await term.echo('🎮 GUESS THE NUMBER GAME');
        await term.echo('=======================');
        await term.echo('I\'m thinking of a number between 1 and 100.');
        await term.echo('Can you guess it?');
        await term.echo('');
        await term.echo('Usage: guess <number>');
        await term.echo('Example: guess 50');
        return;
      }

      const guess = parseInt(args?.[0] || '');
      if (isNaN(guess) || guess < 1 || guess > 100) {
        await term.echo('❌ Please enter a valid number between 1 and 100');
        await term.echo('Example: guess 50');
        return;
      }

      guessGameState.attempts++;

      if (guess === guessGameState.target) {
        await term.echo(`🎉 CONGRATULATIONS! You guessed it!`);
        await term.echo(`🏆 The number was ${guessGameState.target}`);
        await term.echo(`📊 Attempts: ${guessGameState.attempts}`);
        await term.echo('');

        let rating = '🦄 Legendary!';
        if (guessGameState.attempts > 10) rating = '👍 Good job!';
        if (guessGameState.attempts > 20) rating = '💪 Keep practicing!';

        await term.echo(`⭐ Performance: ${rating}`);
        guessGameState = null;
        return;
      }

      if (guess < guessGameState.target) {
        await term.echo(`📈 Too low! Try a higher number.`);
      } else {
        await term.echo(`📉 Too high! Try a lower number.`);
      }

      if (guessGameState.attempts === 5) {
        const tens = Math.floor(guessGameState.target / 10) * 10;
        await term.echo(`💡 Hint: The number is between ${tens} and ${tens + 9}`);
      }

      if (guessGameState.attempts === 10) {
        await term.echo(`💡 Hint: The number is ${guessGameState.target % 2 === 0 ? 'even' : 'odd'}`);
      }

      await term.echo(`🔢 Attempts: ${guessGameState.attempts}`);
    },
    description: [
      'Number guessing game (1-100)',
      'Usage: guess <number>',
      'Reset: guess reset',
      'Example: guess 50'
    ]
  },

  quiz: {
    run: async (args?: string[]) => {
      const term = useTerminal.getState();

      const questions = [
        { q: "What year was JavaScript created?", a: "1995" },
        { q: "Which company developed TypeScript?", a: "microsoft" },
        { q: "What does HTML stand for?", a: "hypertext markup language" },
        { q: "Which language runs in a web browser?", a: "javascript" },
        { q: "What is the latest major version of React?", a: "18" },
        { q: "What does CSS stand for?", a: "cascading style sheets" },
        { q: "Which programming language is known for its use in data science?", a: "python" },
        { q: "What is the name of Google's JavaScript framework?", a: "angular" },
        { q: "What does API stand for?", a: "application programming interface" },
        { q: "Which database is known as a NoSQL database?", a: "mongodb" },
        { q: "What is the virtual DOM in React?", a: "virtual document object model" },
        { q: "Which company created React?", a: "facebook" },
        { q: "What is the package manager for Node.js?", a: "npm" },
        { q: "What does SQL stand for?", a: "structured query language" },
        { q: "Which tool is used for version control?", a: "git" },
        { q: "What is the name of Microsoft's code editor?", a: "visual studio code" },
        { q: "Which protocol is used for secure web traffic?", a: "https" },
        { q: "What does DOM stand for?", a: "document object model" },
        { q: "Which CSS framework is known for its utility-first approach?", a: "tailwind" },
        { q: "What is the name of the JavaScript runtime built on Chrome's V8?", a: "node.js" },
        { q: "Which company developed the Kubernetes container orchestration system?", a: "google" },
        { q: "What does REST stand for in REST API?", a: "representational state transfer" },
        { q: "Which programming language is used for Android development?", a: "kotlin" },
        { q: "What is the name of Apple's programming language?", a: "swift" },
        { q: "Which database uses SQLite as its engine?", a: "sqlite" },
        { q: "What does JSON stand for?", a: "javascript object notation" },
        { q: "Which company owns GitHub?", a: "microsoft" },
        { q: "What is the name of Facebook's GraphQL implementation?", a: "relay" },
        { q: "Which tool is used for containerization?", a: "docker" },
        { q: "What does UI stand for?", a: "user interface" },
        { q: "Which JavaScript framework uses .vue files?", a: "vue" },
        { q: "What is the name of the build tool created by Facebook?", a: "metro" },
        { q: "Which company developed the Go programming language?", a: "google" },
        { q: "What does UX stand for?", a: "user experience" },
        { q: "Which database is known for its key-value store?", a: "redis" },
        { q: "What is the name of Amazon's cloud platform?", a: "aws" },
        { q: "Which tool is used for JavaScript bundling?", a: "webpack" },
        { q: "What does CLI stand for?", a: "command line interface" },
        { q: "Which company developed the Scala programming language?", a: "epfl" },
        { q: "What is the name of the testing framework for JavaScript?", a: "jest" },
        { q: "Which protocol is used for real-time web communication?", a: "websocket" },
        { q: "What does SPA stand for?", a: "single page application" },
        { q: "Which company developed the Kotlin programming language?", a: "jetbrains" },
        { q: "What is the name of Microsoft's cloud platform?", a: "azure" },
        { q: "Which tool is used for continuous integration?", a: "jenkins" },
        { q: "What does CDN stand for?", a: "content delivery network" },
        { q: "Which company developed the Rust programming language?", a: "mozilla" },
        { q: "What is the name of Google's cloud platform?", a: "google cloud" },
        { q: "Which database is known for its graph-based structure?", a: "neo4j" },
        { q: "What does SSR stand for?", a: "server side rendering" }
      ];

      if (args?.[0] === 'reset') {
        quizGameState = null;
        await term.echo('🔄 Quiz reset! Start new quiz with: quiz');
        return;
      }

      if (!quizGameState) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        quizGameState = { questions: shuffled, current: 0, score: 0 };

        await term.echo('🧠 TECH QUIZ CHALLENGE');
        await term.echo('=====================');
        await term.echo(`📝 Total questions: ${questions.length}`);
        await term.echo('🎯 Answer with exact words or numbers');
        await term.echo('💡 Use: quiz <answer> to answer');
        await term.echo('');
        await showQuestion(term, quizGameState);
        return;
      }

      if (!args?.[0]) {
        await term.echo('❌ Please provide an answer');
        await term.echo('Usage: quiz <your_answer>');
        return;
      }

      const userAnswer = args.join(' ').toLowerCase().trim();
      const currentQuestion = quizGameState.questions[quizGameState.current];
      const correctAnswer = currentQuestion.a.toLowerCase();

      let isCorrect = false;
      if (userAnswer === correctAnswer) {
        isCorrect = true;
      } else if (correctAnswer.includes(userAnswer) && userAnswer.length >= 3) {
        isCorrect = true;
      } else if (userAnswer.includes(correctAnswer) && correctAnswer.length >= 3) {
        isCorrect = true;
      }

      if (isCorrect) {
        quizGameState.score++;
        await term.echo('✅ Correct!');
      } else {
        await term.echo(`❌ Wrong! The answer was: ${currentQuestion.a}`);
      }

      quizGameState.current++;

      if (quizGameState.current < quizGameState.questions.length) {
        await term.echo('');
        await term.echo(`📊 Score: ${quizGameState.score}/${quizGameState.current}`);
        await showQuestion(term, quizGameState);
      } else {
        await term.echo('');
        await term.echo('🎉 QUIZ COMPLETED!');
        await term.echo('=================');
        await term.echo(`🏆 Final Score: ${quizGameState.score}/${quizGameState.questions.length}`);

        // Оценка результата
        const percentage = (quizGameState.score / quizGameState.questions.length) * 100;
        let rating = '🎯 Perfect! You\'re a tech genius!';
        if (percentage >= 80) rating = '🌟 Excellent! Great knowledge!';
        else if (percentage >= 60) rating = '👍 Good job! Solid understanding!';
        else if (percentage >= 40) rating = '💪 Not bad! Keep learning!';
        else rating = '📚 Keep studying! You\'ll get better!';

        await term.echo(`⭐ ${rating}`);
        await term.echo('');
        await term.echo('🔄 Play again: quiz reset');
        quizGameState = null;
      }
    },
    description: [
      'Technology quiz with 50 questions',
      'Usage: quiz <answer>',
      'Reset: quiz reset',
      'Example: quiz javascript'
    ]
  }
};

async function showQuestion(term: any, gameState: any) {
  const current = gameState.questions[gameState.current];
  await term.echo(`❓ Question ${gameState.current + 1}/${gameState.questions.length}:`);
  await term.echo(`   ${current.q}`);
  await term.echo('');
  await term.echo('💡 Your answer: quiz <answer>');
}
