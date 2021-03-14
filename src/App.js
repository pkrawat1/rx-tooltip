import "./App.scss";
import Tooltip from "./components/Tooltip/Tooltip";

const App = () => {
  return (
    <div className="container">
      <span>
        Here is a{" "}
        <Tooltip message={"Tooltip"} position={"right"}>
          tooltip
        </Tooltip>{" "}
        on right.
      </span>
      <span>
        The steps to add Sass to Create React App are:{" "}
        <Tooltip
          message={`Install node-sass: "yarn add node-sass". Convert your . css to . scss. Import your . scss files in your React components like App. js.`}
          position={"bottom"}
          formatMessage
        >
          tooltip
        </Tooltip>{" "}
      </span>
    </div>
  );
};

export default App;
