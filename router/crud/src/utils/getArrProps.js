export default async function getArrProps(url) {
	let result 
	await fetch(url, {
			method: "GET"
		})
		.then(response => response.json())
		.then(arr => {
			result = arr
		})
		.catch(err => console.log(err))
	return result
}