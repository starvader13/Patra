import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import allRoutes from './utils/allRoutes';
import SuspenseLoading from './components/App/SuspenseLoading';

function App(): JSX.Element {

	return <div className='bg-gray-800 text-white'>
		<BrowserRouter>
			<Routes>
				{
					allRoutes.map(userRoute => {
						return <Route path={userRoute.path} element={<Suspense fallback={<SuspenseLoading />}> <userRoute.element /> </Suspense>}/>
					})
				}
				<Route path="*" element={<Suspense fallback={<SuspenseLoading />}> <div>False Route</div> </Suspense>}/>
			</Routes>
		</BrowserRouter>
	</div>
}

export default App
