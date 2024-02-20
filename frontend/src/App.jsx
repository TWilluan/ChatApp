import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Route, Routes } from "react-router-dom"

import './App.css'

function App() {
	return (
		<>
			<div className='p-4 h-screen flex items-center justify-center'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/signup' element={<SignUp />}></Route>
				</Routes>
			</div>
		</>
	)
}

export default App
