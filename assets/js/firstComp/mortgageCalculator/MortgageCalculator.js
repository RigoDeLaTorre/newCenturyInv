import React, {Component} from 'react'
import MortgageChart from './mortgageChart.js'

export default class MortgageCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      purchasePrice: 400000,
      downPayment: 3,
      moneyDown: '',
      term: 30,
      apr: 4,
      loanamount: '',
      principalInterest: '',
      taxes: '',
      totalPayment: '',
      insurance: '',
      mortgageInsurance: '',
      chartData: {}
    }
  }

  calculatePayment = () => {
    let purchasePrice = parseInt(this.state.purchasePrice)
    let moneyDown = parseInt(purchasePrice * (this.state.downPayment * .01))
    let loanamount = parseInt(purchasePrice - moneyDown)
    let term = parseInt(this.state.term) * 12
    let apr = parseFloat(this.state.apr) / 1200
    let taxes = (purchasePrice * 0.0125) / 12
    let ins = ((purchasePrice / 1000) * 3.5) / 12
    let mortgageInsurance = parseInt((loanamount * .0052) / 12)
    mortgageInsurance = this.state.downPayment < 20 ? mortgageInsurance : 0

    let payment = loanamount * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
    let totalPayment = parseInt(payment + taxes + ins + mortgageInsurance);
    payment = parseInt(payment);
    taxes = parseInt(taxes);
    ins = parseInt(ins);

    this.setState({
      mortgageInsurance: mortgageInsurance,
      moneyDown: moneyDown,
      loanamount: loanamount,
      principalInterest: payment,
      taxes: taxes,
      insurance: ins,
      totalPayment: totalPayment,
      chartData: {
        labels: [
          'Principal & Interest', 'Taxes', 'Insurance', 'PMI'
        ],
        datasets: [
          {
            label: ['Population'],
            data: [
              payment, taxes, ins, mortgageInsurance
            ],
            backgroundColor: [
              '#26331d', '#507935', '#63ef06', '#d0eabf'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
          }
        ]
      }

    });
  }

  componentDidMount() {
    this.calculatePayment()
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {this.calculatePayment()})
  }
  clearOnFocus = () => {}

  render() {
    return (<section id="mortgage-calculator">
      <div className="mortgage-calculator-container">
        <div className="mortgage-title">
          <h1>Mortgage
            <span>Calculator</span>
          </h1>
          <h3>Use the slider to show an estimated mortgage payment</h3>
        </div>
        <div className="mortgage-results">
          <form action="" className="user-input">
            <div className="form-group">
              <div className="label">
                <label>Home Price</label>
                <span>${this.state.purchasePrice}</span>
              </div>
              <input type="range" min="100000" max="2000000" step="5000" id="amt" name="purchasePrice" value={this.state.purchasePrice} onChange={this.change}/>
            </div>
            <div className="form-group">
              <div className="label">
                <label>Down Payment</label>
                <span>${this.state.moneyDown}</span>
                <span>{this.state.downPayment}% Down</span>
              </div>
              <input type="range" min="3" max="25" id="downPayment" name="downPayment" value={this.state.downPayment} onChange={this.change}/>
            </div>

            <div className="form-group">
              <div className="label">
                <label>Interest Rate</label>
                <span>{this.state.apr}%</span>
              </div>
              <input type="range" min="1" max="12" id="apr" step=".5" name="apr" value={this.state.apr} onChange={this.change}/>
            </div>

            <div className="form-group">
              <div className="label">
                <label>Mortgage Loan Type</label>
              </div>
              <select id="trm" name="term" value={this.state.term} onChange={this.change}>
                <option value="30">30 Year Fixed</option>
                <option value="25">25 Year Fixed</option>
                <option value="20">20 Year Fixed</option>
                <option value="15">15 Year Fixed</option>
              </select>
            </div>
          </form>
          <div className="user-result">
            <MortgageChart chartGlobal={this.state} chartData ={this.state.chartData}/>
          </div>
        </div>
      </div>

    </section>)
  }
}
