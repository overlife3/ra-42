async function sendForm(obj) {
	return await fetch('http://localhost:7777/notes', {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: {
      'Content-Type': 'application/json'
    }
	})
}

export default sendForm