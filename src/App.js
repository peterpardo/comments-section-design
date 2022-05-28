import './app.css';
import Comments from "./components/comments/Comments";
import Reply from "./components/reply/Reply";

function App() {
  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <Comments/>
        <Reply placeholder="Add a comment..." action="SEND"/> 
      </div>
    </div>
  );
}

export default App;
