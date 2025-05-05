import Score from './Score'

const Learner = ({ learner }) => {
  return (
    <div className="learner-card">
      <h2 className="learner-name">{learner.name}</h2>
      <p className="learner-bio">{learner.bio}</p>
      <div className="learner-scores">
        {learner.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </div>
    </div>
  )
}

export default Learner