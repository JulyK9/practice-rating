import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="w-full h-full bg-slate-100">
      <StarRating totalStars={5} />
    </div>
  );
}

export default App;
