import './style.css';
import React, { useState } from 'react';
import questions from './quiz.json';

function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [listNumerator, setNumerator] = useState(new Map());
	const [listDenominator, setDenominator] = useState(new Map());

	const handleAnswerOptionClick = (isCorrect, tag) => {
		if (isCorrect) {
			setScore(score + 1);
			if (listNumerator.has(tag)) {
				setNumerator(new Map(listNumerator.set(tag, listNumerator.get(tag)+1)));
				//alert(listNumerator.get(tag));
			}
			else {
				setNumerator(new Map(listNumerator.set(tag, 1)));
				//alert(listNumerator.get(tag));
			}
		}
		else {
			if (!listNumerator.has(tag)) {
				setNumerator(new Map(listNumerator.set(tag, 0)));
			}
		}
		if (listDenominator.has(tag)) {
			setDenominator(new Map(listDenominator.set(tag, listDenominator.get(tag)+1)));
		}
		else {
			setDenominator(new Map(listDenominator.set(tag, 1)));
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const percentages = [];
	for (let key of listNumerator.keys()) {
		var numerator = listNumerator.get(key);
		var denominator = listDenominator.get(key);
		var percentage = Math.trunc(numerator / denominator * 100);
		percentages.push(<p>You got {percentage}% on {key}</p>);
	}

	return (
    <div className="quiz-body">
      <div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					<div className='score-text'>
						You scored {score} out of {questions.length}
						{percentages}
					</div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect, questions[currentQuestion].tag)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    </div>
	);
}

export default Quiz;