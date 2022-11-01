import axios from "axios"
import {useState } from "react"
import { useStateContext } from "./Contexts/ContextProvider"

export default function Login() {
  const {afterLogin} = useStateContext()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	function handleLogin (evt) {
		evt.preventDefault()
		axios.post('https://dummyjson.com/auth/login', {
			username,
			password
		}).then(res => afterLogin(res.data))
    .catch(err => window.location.assign("/"))
	}

	return <>
		<h1>Login Form</h1>

		<form onSubmit={handleLogin}>
			<label>
				Username: <br />
				<input
					required
					type="text"
					value={username}
					onChange={evt => setUsername(evt.target.value)} />
			</label>
			<br /><br />
			<label>
				Password: <br />
				<input
					required
					type="password"
					value={password}
					onChange={evt => setPassword(evt.target.value)} />
			</label>
			<br /><br />
			<button>
				Login
			</button>
		</form>
	</>
}