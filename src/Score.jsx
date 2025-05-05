const Score = ({ score }) => {
    return (
      <div className="score-entry">
        <p>Date: {score.date} — Score: {score.score}</p>
      </div>
    )
  }
  
  export default Score