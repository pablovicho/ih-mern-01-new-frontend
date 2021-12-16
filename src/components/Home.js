// ./client/src/components/Home.js
import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext'



export default function Home() {

	const ctx = useContext(UserContext)

	const {
		verifyToken
	} = ctx

	return (
		<div>
			Este es el Home
			<button onClick={() => {
				verifyToken()
			}}>
				Verificar sesión
			</button>

		</div>
	)
}