import "./App.css";
import { Cards } from "./components/Cards";
import Datasets from "./data/Datasets";

export const App = (props) => {
  return (
    //--------------------------------------------------------------
    // <div className="parent">
    //   {Datasets.map((elem) => {
    //     return (
    //       <Cards
    //         company={elem.company}
    //         logo={elem.logo}
    //         time={elem.time}
    //         role={elem.role}         (Chaho to aap aise v likh sakte ho lekin ye smjhane k liye hai! best tarika niche wala hai)
    //         type={elem.type}
    //         level={elem.level}
    //         salary={elem.salary}
    //         location={elem.location}
    //       />
    //     );
    //   })}
    // </div>
// OR--------------------------------------------------------------->
    <div className="parent">
      {Datasets.map((elem, index) => {
        return <Cards key={index} {...elem} />;
      })}
    </div>
  );
};

export default App;
