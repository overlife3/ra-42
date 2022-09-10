function getRgbFromNex(nex) {
	const str = nex.slice(1)

	const rgb = `rgb(${parseInt(str.slice(0,2), 16)}, ${parseInt(str.slice(2,4), 16)}, ${parseInt(str.slice(4), 16)}) `

	return rgb
}

export default getRgbFromNex