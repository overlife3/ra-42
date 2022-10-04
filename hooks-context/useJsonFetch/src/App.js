import React, { useEffect } from 'react';
import useJsonFetch from './hooks/useJsonFetch';


export default function App() { 
	const [data, loading, error] = useJsonFetch('http://localhost:7070/loading')

	if(loading) return 'Loading...'

	if (error) {
		console.log(error)
		return null
	}


	return (
		<div className='container'>
			{JSON.stringify(data && data.status)}
		</div>
	);
}