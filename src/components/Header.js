import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onShow, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{location.pathname === "/" ? title : "Task Tracker"}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onShow}
        />
      )}
    </header>
  );
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
