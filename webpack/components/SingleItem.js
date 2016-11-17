import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
class SingleItem extends React.Component {
    constructor(props){
        super(props)
        this.handleQuantityChange = this.handleQuantityChange.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.state = {
            id: window.location.href.split('/')[4],
            item: {},
            quantity: 1,
            maxQty: '',
        };
    }
    componentDidMount(){
        fetch('/api/patches/' + this.state.id)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({item: response}))
    }
    handleQuantityChange(event) {
        this.setState({
            quantity: event.target.value
        })
    }
    addToCart(){
        fetch('/api/patches/')
    }

    render(){
        var priceUpdate = this.state.item.price / 100;
        var maxQty = this.state.item.available
        // console.log(maxQty)
        // console.log(this.state.quantity)
        // console.log(this.state.item.available)
        // console.log(document.getElementById('quantity').value)
        return (
            <div>
                <Nav />
            <div className="container-fluid">
                <div className="row">
                    <main className="singleItem-body">
                        <section className="singleItem-disp">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label htmlFor="image description">Patch</label>
                                        <img src={this.state.item.image} alt="random image to hold place" className="thumbnail singleItem_display"/>
                                    </div>
                                </div>
                                <div className="row singleItem_avail_section">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="pathAvailability">Available Sizes</label>
                                            <select className="form-control" name="available_sizes" id="size">
                                                <option>{this.state.item.size}</option>
                                            </select>
                                            <br />
                                            <label htmlFor="pathAvailability">Available Qty</label>
                                            <p>{this.state.item.available}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="singleItem-desc">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img src="/images/iron-glory-assets/iron-glory-logo.png" alt="image of iron glory"/>
                                    </div>
                                </div>
                                <div className="row singleItem_desc_sec">
                                    <div className="col-sm-12">
                                        <h3 tabIndex="0">Patch Name: <em>{this.state.item.product}</em></h3>
                                        <h3 tabIndex="0">Patch Sku: <em>{this.state.item.sku}</em></h3>
                                        <h3 tabIndex="0">Patch Price: <em>&#36;{/*this.state.item.price*/} {priceUpdate}</em></h3>
                                        <h3 tabIndex="0">Patch Description: </h3>
                                        <p>{this.state.item.description}</p>
                                        <label htmlFor="select quantity">Select Qty.</label>
                                        <input className="form-control" type="number" name="quantity" id="quantity" step="1" min="1" max="15" pattern="[0-9]*" inputMode="numeric" value={this.state.quantity} onChange={this.handleQuantityChange}/>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-sm-6"><button className="btn btn-success singleItem_desc_btn" onClick={this.addToCart}>Add To Cart</button></div>
                                    <div className="col-sm-6"><Link to="/"><button className=" btn btn-primary singleItem_desc_btn">Back To Patches</button></Link></div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
        )
    }
}

export default SingleItem
