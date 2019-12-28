import React, { Component } from 'react'
import ProductList from './ProductList';
import MyProvider from './MyProvider';

export default class App extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <header className="App-header">
                    <h1 className="App-title">Welcome to my web store</h1>
                    <h2>edit react app</h2>
                    </header>
                    <MyProvider>
                        <ProductList />
                    </MyProvider>
                </div>
            </>
        )
    }
}
