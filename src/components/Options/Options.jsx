import css from "./Options.module.css"
import PropTypes from "prop-types"


const Options = ({ onUpdate, total, onReset }) => {
  return (
    <div >
      <div className={css.valueBtnWrapper}>
        <button className={css.response} onClick={() => onUpdate("good")}>
          Good 
        </button>
        <button className={css.response} onClick={() => onUpdate("neutral")}>
          Neutral
        </button>
        <button className={css.response} onClick={() => onUpdate("bad")}>
          Bad 
        </button>
    
      {total >=1 ? (
        <button className={css.response} onClick={() => onReset()}>
          Reset
        </button>
      ) : null}
          </div>
            </div>
  );
};

Options.propTypes = {
    total: PropTypes.number.isRequired,
}

export default Options;