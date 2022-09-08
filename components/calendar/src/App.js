import Calendar from './components/Calendar.js';


const now = new Date(2017, 2, 8);


function App() {
  return (
		<Calendar date={now} />
  );
}

export default App;
