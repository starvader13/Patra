import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import allRoutes from './utils/allRoutes';
import SuspenseLoading from './components/App/SuspenseLoading';
import { RecoilRoot } from 'recoil';
import Navbar from './sections/Navbar/Navbar';
import Footer from './sections/Footer/Footer';

function App(): JSX.Element {

	return <div >
		<RecoilRoot>
			<BrowserRouter>
				<Navbar />
				<Routes>
					{
						allRoutes.map(userRoute => {
							return <Route path={userRoute.path} element={<Suspense fallback={<SuspenseLoading />}> <userRoute.element /> </Suspense>}/>
						})
					}
					<Route path="*" element={<Suspense fallback={<SuspenseLoading />}> <div>False Route</div> </Suspense>}/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</RecoilRoot>
	</div>
}

export default App
