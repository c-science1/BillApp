import React from 'react';

import Packages from './Packages';
import SkyStore from './SkyStore';
import PayBill from './PayBill';



export default class Main extends React.Component {


	    toggleSection(id) {
        var sectiondetails = id+"Details",
            secID = document.getElementById(id),
            secDetailsID = document.getElementById(sectiondetails),
            fullSelector = "#" + id + " .glyphicon",
     	    chevSel = document.querySelector(fullSelector);

     	    //console.log(sectiondetails);
	        if(secDetailsID.style.display == "block"){
	        	secDetailsID.style.display = "none";
	        	chevSel.className = "glyphicon glyphicon-chevron-down pull-right";
	        }
	        else{
	        	secDetailsID.style.display = "block";
	        	chevSel.className = "glyphicon glyphicon-chevron-up pull-right";
	        }  
    }
	render () {
		return (
			<main>
			<section className="row" id="billSummary">
				 <div className="col-sm-9">
					<div className="panel panel-default">
  						<div className="panel-heading"><h2>Your Bill <span className="pull-right" id="billAmount">&pound;{this.props.total}</span></h2></div>
	  						<div className="panel-body">
	  								<section className="row bill-date-details">
	  									<div className="col-sm-12 col-md-4 right-border">Date issued: {this.props.statement.generated}<strong></strong></div>
	  									<div className="col-sm-4 right-border">Date due: {this.props.statement.due}<strong></strong></div>
	  									<div className="col-sm-4">Period: <strong>{this.props.statement.period.from} - {this.props.statement.period.to}</strong></div>
	  								</section>
	  								<section className="row bill-date-details">
										<div className="col-sm-12"><h3>Summary of charges</h3></div>
	  								</section>

	  								<Packages package={this.props.package} toggle={this.toggleSection}
	  										  title="Packages" subtitle="Subscriptions" 
	  										  titleColOne="Type" titleColTwo="Name" titleColThree="Cost"
	  										  section="sectionOne" sectionDetails="sectionOneDetails"/>

	  								<Packages callCharges={this.props.callCharges} toggle={this.toggleSection}
	  										  title="Call charges" subtitle="Calls" titleColOne="Called" titleColTwo="Duration" titleColThree="Cost"
	  										  section="sectionTwo" sectionDetails="sectionTwoDetails"/>

	  								<SkyStore skyStore={this.props.skyStore} toggle={this.toggleSection} />
	  						</div>
						</div>
					</div>
					<PayBill total = {this.props.total} />
			   </section>
		</main>
		);
	}
};

Main.propTypes = {
	statement: React.PropTypes.any,
	key: React.PropTypes.any
};

Main.defaultProps = {
					"statement": {
				                "generated": "2016-01-17",
				                "due": "2016-01-30",
				                "period": {
				                  "from": "",
				                  "to": ""
				                  }
				    },
					"total": 10
};

