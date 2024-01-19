import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	get_product_request,
	product_filter,
	product_search,
} from "../Redux/ProductConstant";
import "../Styles/styles.css";
import SingleProductCard from "./ProductCard";
import Filter from "./Filters";
export default function ProductList() {
	const dispatch = useDispatch();
	const { fetchedData, filterData, loading, error } = useSelector(
		(store) => store.productReducer
	);
	const mappingData = filterData.length ? filterData : fetchedData;
	const [searchInput, setSearchInput] = useState("");

	const searchDataHandler = () => {
		dispatch(product_search(searchInput.split(" ")));
	};
	const searchOnKeyPress = (e) => {
		if (e.key === "Enter") {
			dispatch(product_search(searchInput.split(" ")));
		}
	};

	useEffect(() => {
		dispatch(get_product_request());
	}, []);

	return (
		<>
			<div className="searchDiv">
				<input
					type="text"
					placeholder="Search for products..."
					onChange={(e) => {
						setSearchInput(e.target.value);
					}}
					onKeyPress={searchOnKeyPress}
				/>
				<div className="searchIconDiv" onClick={searchDataHandler}>
					<i className="fa fa-search" aria-hidden="true"></i>
				</div>
			</div>

			<div className="contentDiv">
				<Filter />
				<div className="product_list_div">
					{loading ? (
						<div className="loading">
							<img
								className="loaderImg"
								src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47enh67r9jig7i5y4nvjr1t09p7eazccwl38n38bu6&ep=v1_gifs_search&rid=giphy.gif&ct=g"
							/>
						</div>
					) : (
						mappingData.map((item) => {
							return <SingleProductCard item={item} key={item.id} />;
						})
					)}
				</div>
			</div>
		</>
	);
}
