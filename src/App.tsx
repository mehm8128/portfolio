import "./App.module.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Top from "./pages/Top"
import Layout from "./components/Layout"

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Top />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
