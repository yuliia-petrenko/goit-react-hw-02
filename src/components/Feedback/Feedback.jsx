import css from "./Feedback.module.css"
import PropTypes from "prop-types"; 

const Feedback = ({ good, neutral, bad, total, positive }) => {
      return (
    <ul className={css.list}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      {total > 0 && (
        <>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive: {positive}%</p>
          </li>
        </>
      )}
    </ul>
  );

};

Feedback.propTypes = { 
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positive: PropTypes.number.isRequired,
}; 

export default Feedback;

