import './App.css';
import Analysis from "./components/Analysis"
import Sidebar from "./components/Sidebar"
import Ratings from "./components/Ratings"
import Review from "./components/Review"
import Visitors from "./components/Visitors"

function App() {
  return (
    <div className="App">
     <Sidebar/>

    <div className="rightrail">
    <div className="kpi">
     <Analysis/>
     <Ratings/>
     <Review/>
    </div>
     
     <Visitors/>
     </div>

    </div>
  );
}

export default App;
