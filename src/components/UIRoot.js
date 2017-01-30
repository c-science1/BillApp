import React, { Component } from 'react';
import BillSummary from './BillSummary';
import PayBill from './PayBill';

export default class UIRoot extends Component{
    	render () {
			return <div>
					<BillSummary />
					</div>;
	}
};