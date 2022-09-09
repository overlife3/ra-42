import Stars from "./components/Stars"

function App() {
	return (
		<div className="card">
			<h3>Супермен</h3>
			<p>Суперме́н — супергерой комиксов, которые выпускаются компанией DC Comics. Он считается иконой американской культуры. </p>
			<Stars count={4} />
			<button className="btn">Купить $60</button>
		</div>
	)
}

export default App