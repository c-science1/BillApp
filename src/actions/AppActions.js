import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import fetch from 'isomorphic-fetch';
let AppActions = {

	apiGetAll: function () {
	    AppDispatcher.dispatch({
	        actionType: AppConstants.API_GETALL_START
	    });
	   	//fetch('').then(function (response) {
	    fetch('https://still-scrubland-9880.herokuapp.com/bill.json').then(function (response) {
	        return response.json();
	    }).then(function (apiData) {
	        AppDispatcher.dispatch({
	            actionType: AppConstants.API_GETALL_SUCCESS,
	            data: apiData
	        });
	    });
	}
}
export default AppActions;