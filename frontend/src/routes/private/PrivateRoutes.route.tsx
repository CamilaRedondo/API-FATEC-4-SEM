import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutesMiddleware from "./PrivateRoutesMiddleware";
import Home from "../../pages/private/Home/Home";
import Transaction from "../../pages/private/Transaction/Transaction";
import Sidebar from "../../components/SideBar/SideBar";
import ListTransactions from "../../pages/private/ListTransactions/ListTransactions";

function PrivateRoutes(): JSX.Element {
	return (
		<Routes>
			<Route element={<PrivateRoutesMiddleware redirectPath="/sign-in" />}>
				<Route element={<Sidebar/>}>
					<Route path="/" element={<Home />} />
					<Route path="/transaction" element={<Transaction />} />
					<Route path="/listTransaction" element={<ListTransactions/>} />
				</Route>
			</Route>
		</Routes>
	);
}

export default PrivateRoutes;
