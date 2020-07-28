import React, {useState} from 'react'

const Search = ({Query}) =>{
	const [text, setText] = useState('')

	function handleChange(q){
		setText(q)
		Query(text)
	}
	return (
		<section className='search'>
			<input 
				className='form-control'
				type='text'
				placeholder='Search....'
				value={text}
				onChange={(e) => handleChange(e.target.value)} 
				autoFocus
			/>
		</section>
	)
}

export default Search