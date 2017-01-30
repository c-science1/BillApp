import React, { Component } from 'react';
export default class PayBill extends Component {
	render (){
		return( 
			  <aside className="col-sm-3">
			  	<div className="panel panel-default">
						<div className="panel-heading">Bill Payment</div>
						<div className="panel-body">
							<p>You can pay online by using a debit or credit card.</p>
							<p>Balance: {this.props.total}</p>

							<button type="button" className="btn btn-primary" aria-label="payment button">Make Payment</button>

						</div>
				</div>
			  </aside>
			  );		  
	}
}

PayBill.defaultProps = { "total": 0}