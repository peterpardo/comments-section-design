import './app.css';
import Comments from "./components/comments/Comments";
import Reply from "./components/reply/Reply";

function App() {
  return (
    <div className="mainContainer">
      <Comments />
      <Reply placeholder="Add a comment..." action="SEND"/>
    </div>
  );
}

export default App;
