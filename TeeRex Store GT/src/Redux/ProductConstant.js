import axios from "axios";

// action constant
export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_ERROR = "PRODUCT_ERROR";
export const PRODUCT_SUCESS = "PRODUCT_SUCESS";
export const PRODUCT_FILTER = "PRODUCT_FILTER";
export const PRODUCT_SEARCH = "PRODUCT_SEARCH";
export const product_loading = () => ({ type: PRODUCT_LOADING });
export const product_success = (payload) => ({ type: PRODUCT_SUCESS, payload });
export const product_error = () => ({ type: PRODUCT_ERROR });
export const product_filter = (payload) => ({ type: PRODUCT_FILTER, payload });
export const product_search = (payload) => ({ type: PRODUCT_SEARCH, payload });

export const get_product_request = () => (dispatch) => {
	dispatch(product_loading());
	fetch(
		"https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
	).then(async (res) => {
		const data = await res.json();
		dispatch(product_success(data));
	});
};
