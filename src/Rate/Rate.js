import React from 'react';
import './Rate.css';
import Calc from "../Calc/Calc"


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "date": " ",
            "currencyRate": {

            }

        }
        this.currency = ["USD", "EUR", "UAH"];
        this.getRate();
    }
    getRate = () => {
        fetch("https://api.exchangerate.host/latest?base=UAH")
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ date: data.date });
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                console.log(result);
                this.setState({ currencyRate: result });

            });
    }
    render() {
        return (
            <div className="rate">
                <h3> Курс валют на {this.state.date}</h3>
                <div className="flex-container">

                    <div className="block flex-item">
                        <div className="currency-name">1 {"USD"}</div>
                        <div className="currency-in">{(1 / this.state.currencyRate["USD"]).toFixed(2)} грн</div>
                    </div>
                    <div className="block flex-item">
                        <div className="currency-name">1 {"EUR"}</div>
                        <div className="currency-in">{(1 / this.state.currencyRate["EUR"]).toFixed(2)} грн</div>
                    </div>

                </div>
                <Calc rate={this.state.currencyRate} />
            </div>
        );
    }
}
export default Rate;
