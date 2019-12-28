import React , {Component} from 'react'
import MyContext from './MyContext';

export default class MyProvider extends Component {
    constructor(){
        super();
        this.state = {cars: {
                car001: { name: 'Honda', price: 100 },
                car002: { name: 'BMW', price: 150 },
                car003: { name: 'Mercedes', price: 200 }
            },
            digitals:[
                {id:1, name: 'panasonic', price: 200 },
                {id:2, name: 'samsung', price: 250 },
                {id:3, name: 'LG', price: 300 }
            ]
        };
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    digitals: this.state.digitals,
                    removeDigitalItem: id => {
                        const temp = this.state.digitals.filter(q => q.id != id);
                        this.setState({
                            digitals:temp
                        });
                    },
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}