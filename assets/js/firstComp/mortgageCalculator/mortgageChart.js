import React, { Component } from 'react'
import {Bar,Pie, Doughnut} from 'react-chartjs-2';

export default class MortgageChart extends Component {
	constructor(props) {
		super(props)
		this.state = {
      chartData:props.chartData
}}



static defaultProps ={
	displayTitle:false,
	displayLegend:false,
	legendPosition:'top'
}
componentWillReceiveProps(nextProps){
	this.setState({chartData:nextProps.chartData})
}
	render() {
		return (
				<section id="mortgage-chart">
				<div className="chart-container">
					<Doughnut
						data={this.state.chartData}
						width={200}
						height={200}
						options={{
							maintainAspectRatio:false,
							title:{
								display:this.props.displayTitle,
								text:"Mortgage Payment",
								fontSize:25},
							legend:{
								display:this.props.displayLegend,
								position:this.props.legendPosition
							}}}/>
							<div className="payment-center">

								<h1>${this.props.chartGlobal.totalPayment}</h1>
								<h4>Month</h4>
							</div>

					</div>
					<div className="details">
							<div className ="detailsGroup">
								<span>Loan Amount</span>
								<span>${this.props.chartGlobal.loanamount}</span>
							</div>
							<div className ="detailsGroup">
								<span>Principal & Interest</span>
								<span>${this.props.chartGlobal.principalInterest}</span>
							</div>
							<div className ="detailsGroup">
								<span>Property Tax</span>
								<span>${this.props.chartGlobal.taxes}</span>
							</div>
							<div className ="detailsGroup">
								<span>Home Insurance</span>
								<span>${this.props.chartGlobal.insurance}</span>
							</div>
							<div className ="detailsGroup">
								<span>PMI</span>
								<span>${this.props.chartGlobal.downPayment <20 ? this.props.chartGlobal.mortgageInsurance : "0"}</span>
							</div>
							<span style={{color:'#4CAF50'}}>{this.props.chartGlobal.downPayment <20 ? "" : "No PMI on Down Payments of 20% +"}</span>


					</div>
			</section>
		)
	}
}
