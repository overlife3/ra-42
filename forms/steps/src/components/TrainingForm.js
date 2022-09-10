function TrainingForm({ onFormChange, onSubmitForm, form }) {

	return (
		<form className="form" onSubmit={onSubmitForm}>
			<div className="form__item">
				<label htmlFor="date">
					Дата (ДД.ММ.ГГ)
				</label>
				<input id="date" name="date" onChange={onFormChange} value={form.date}/>
			</div>

			<div className="form__item">
				<label htmlFor="distance">
					Пройдено км
				</label>
				<input id="distance" name="distance" onChange={onFormChange} value={form.distance}/>
			</div>

			<button type="submit">ок</button>
		</form>
	)
}

export default TrainingForm