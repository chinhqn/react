import React, { Component } from 'react';
import './App.css';
class App extends Component {
    showInfoProduct(product) {
        if (product.status) {
            return(
                <h3>
                    ID: {product.id} <br/>
                    Name: {product.name}<br/>
                    Price: {product.price}<br/>
                    status: {product.status ? 'Active' : 'pending'}
                </h3>
            );
        }
    }
  render() {
        var a = 5;
        var name = "Quoc Chinh";
        var b = 7;
        var product = {
            id: 1,
            name: "iphone 7 plus",
            price: 120000,
            status: true,
        };
        var users = [
            {
                id: 1,
                name: "Nguyen Van A",
                age: 12
            },
            {
                id: 2,
                name: "Nguyen Van B",
                age: 23
            },
            {
                id: 3,
                name: "Nguyen Van C",
                age: 34
            },
        ];
        var elments = users.map((user, index) => {
            return <div key={user.id}>
                <h2>Ten: {user.name}</h2>
                <h2>Tuoi: {user.age}</h2>
            </div>
        });
        return (
            <div>
                <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">Home</a>
                        <a className="navbar-brand">Page</a>
                    </div>
                </nav>
                <div className="ml-30">
                    <h2>
                        a: {a} <br/>
                        b: {b} <br/>
                        a+b: {a+b}
                    </h2>
                    <h3>
                        Name: {name}
                    </h3>
                    {this.showInfoProduct(product)}
                    <hr/>
                    {elments}
                </div>
            </div>
        );
  }
}

export default App;
