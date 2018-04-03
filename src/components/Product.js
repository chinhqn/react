import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img alt="" src="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-h1-400x460-400x460.png" />
                            <div className="caption">
                                <h3>San pham</h3>
                                <p>Iphone</p>
                                <p>Samsung</p>
                            </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Mua hang</button>
            </div>
        );
    }
}
export default Product;