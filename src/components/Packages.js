import React from 'react';

function formatDate(datePassed){
    const d = new Date(datePassed);
    const formatted = `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`;
    return formatted;
}
const templateLit = `hello,
                     how are you?
                     `;
document.write(templateLit);

export default class Packages extends React.Component{
  constructor(props) {
        super(props);
        this.sectionId = this.props.section;
    }
	render() {
    	return (
       		<section className="row bill-summary">
      				<div className="toggle-section" id={this.props.section} onClick={()=>this.props.toggle(this.sectionId)}><h4>{this.props.title} <span className="glyphicon glyphicon-chevron-down pull-right" aria-label="click on the arrow to expand or collapse"></span></h4></div>
      				<div className="toggle-section-details" id={this.props.sectionDetails}>
      						<h5><strong>{this.props.subtitle}</strong></h5>
      						<table className="table table-striped" id="tblSubscriptions">
      						<tbody>
      							<tr>
      								<th>{this.props.titleColOne}</th>
      								<th>{this.props.titleColTwo}</th>
      								<th>{this.props.titleColThree}</th>
                      <th>Date</th>
      							</tr>
      							{
      								this.props.package.subscriptions.map(function (item){
      									return <tr>
      										<td className="uppercase">{item.type}</td>
      										<td>{item.name}</td>
      										<td>{item.cost}</td>
      									</tr> 
      								})
      							}
                    {
                      this.props.callCharges.calls.map(function (item){
                        return <tr>
                          <td className="uppercase">{item.type}</td>
                          <td>{item.name}</td>
                          <td>{item.cost}</td>
                          <td>{formatDate(item.date)}</td>
                        </tr>
                      })
                    }
      							<tr>
      								<td className="bg-grey" id="callTotal">Subtotal</td>
      								<td className="bg-grey"></td>
      								<td className="bg-grey">{this.props.package.total}</td>
      							</tr>
      							</tbody>
      						</table>
      				</div>
      			</section>
    );
  }
		
}

Packages.defaultProps = {
                    	"package": {
                    		      "subscriptions": [
                    		        { "type": "", "name": "", "cost": 0 }
                    		      ],
                    		      "total": 0
                        },
                        "callCharges": {
                          "calls": [
                              { "called": "", "duration": "", "cost": 0 }
                            ],
                          "total": 0
                        }
};