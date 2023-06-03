import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="w-full h-full bg-slate-100">
      <StarRating totalStars={5} bgColor="yellow" />
      <StarRating totalStars={5} bgColor="sky" />
      <StarRating totalStars={5} bgColor="teal" />
    </div>
  );
}

export default App;
