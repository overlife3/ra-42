async function getForm() {
	return await fetch('http://localhost:7777/notes', {
		method: 'GET'
	}).then(response => response.json()).then(text => console.log(text))
}

export default getForm