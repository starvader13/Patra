import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import allRoutes from './utils/allRoutes';

function App(): JSX.Element {

	return <div>
		<BrowserRouter>
			<Routes>
				{
					allRoutes.map(userRoute => {
						return <Route path={userRoute.path} element={<Suspense fallback={<a><img src="/loading.gif" alt="...Loading" /></a>}> <userRoute.element /> </Suspense>}/>
					})
				}
				<Route path="*" element={<Suspense fallback={"...loading"}> <div>False Route</div> </Suspense>}/>
			</Routes>
		</BrowserRouter>
	</div>
}

export default App
