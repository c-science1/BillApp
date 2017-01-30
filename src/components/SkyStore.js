import React from 'react';

export default class skyStore extends React.Component{

	render(){
		return(
				<section className="row bill-summary">
						<div className="toggle-section" id="sectionThree" onClick={()=>this.props.toggle('sectionThree')}><h4>Sky store <span className="glyphicon glyphicon-chevron-down pull-right" aria-label="click on the arrow to expand or collapse"></span></h4></div>
						<div className="toggle-section-details" id="sectionThreeDetails">
						<div className="toggle-section-details">
								<h5><strong>Rentals</strong></h5>
								<table className="table table-striped">
								<tbody>
									<tr>
										<th>Title</th>
										<th>Cost</th>
									</tr>
									{
										this.props.skyStore.rentals.map(function (item){
											return <tr>
												<td>{item.title}</td>
												<td>{item.cost}</td>
											</tr>	
										})
									}
										
									</tbody>
								</table>

								</div>

						<div className="toggle-section-details">
								<h5><strong>Buy and Keep</strong></h5>
								<table className="table table-striped">
								<tbody>
									<tr>
										<th>Title</th>
										<th>Cost</th>
									</tr>

									{
										this.props.skyStore.buyAndKeep.map(function (item){
											return <tr>
												<td>{item.title}</td>
												<td>{item.cost}</td>
											</tr>	
										})
									}
									</tbody>
								</table>

						</div>
						<div className="toggle-section-details">
						<table className="table table-striped">
						<tbody>
								<tr>
										<td className="bg-grey" id="skyStoreTotal">Subtotal</td>
										<td className="bg-grey">{this.props.skyStore.total}</td>
							</tr>
						</tbody>
						</table>
						</div>
				</div>
				</section> 
			);
	}
}

skyStore.defaultProps = {
					skyStore: {
							    "rentals": [
							      { "title": "", "cost": 0 }
							    ],
							    "buyAndKeep": [
							      { "title": "", "cost": 0 },
							      { "title": "", "cost": 0 }
							    ],
							    "total": 0
						}
};