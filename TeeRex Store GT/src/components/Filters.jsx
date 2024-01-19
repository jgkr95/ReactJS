import { filterCategories, filterTypes } from "../constants";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { product_filter } from "../Redux/ProductConstant";

export default function Filters() {
	const dispatch = useDispatch();

	const [selectedCategory, setSelectedCategory] = useState([]);

	const selectCategoryHandler = (e) => {
		const { checked, value } = e.target;
		if (checked) {
			setSelectedCategory([...selectedCategory, value]);
		} else {
			setSelectedCategory([...selectedCategory.filter((e) => e != value)]);
		}
	};

	useEffect(() => {
		dispatch(product_filter(selectedCategory));
	}, [selectedCategory]);
	return (
		<div className="filter_div">
			{filterCategories.map((category) => {
				return (
					<div key={category} className="checkBoxDiv">
						<h4>{category}</h4>
						{filterTypes[category].map((item) => {
							return (
								<div key={item} className="check_box">
									<input
										type="checkbox"
										name=""
										onChange={selectCategoryHandler}
										value={item}
									/>{" "}
									<label htmlFor="">{item}</label>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
