import React from 'react'
import Spinner from '../ui/Spinner'

class CharacterCard extends React.Component{
	constructor(){
		super()
		this.state ={
			isLoading : true,
			characters : [],
		}
		const q = null
	}
	
	fetchList = () => {
		this.setState({isLoading : true})
		fetch(`https://www.breakingbadapi.com/api/characters?name=${this.props.SendQuery}`)
			.then(response => response.json())
			.then(response => {
				this.setState({
					characters : response,
					isLoading : !this.state.isLoading
				})
			})
	}
	

	render(){
		if (this.q !== this.props.SendQuery){
			this.fetchList()
			this.q = this.props.SendQuery
		}
		
		const characterList = this.state.characters.map(character =>{
			return (
				<section key={character.char_id} className='card'>
					<div className='card-inner'>
						<div className='card-front'>
							<img src={character.img} alt='' />
						</div>
						<ul className='card-back'>
							<h1 className='center'>{character.name}</h1>
							<li>NickName : {character.nickname}</li>
							<li>Portrayal : {character.portrayed}</li>
							<li>Status : {character.status}</li>
						</ul>
					</div>
				</section>
			)
		})
		return(
			this.state.isLoading ? 
			<Spinner /> :
			<div className='cards'>
				{characterList}
			</div>
		)
	}
}

export default CharacterCard