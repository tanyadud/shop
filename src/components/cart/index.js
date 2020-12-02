import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { CartBox,
         CartTotalBox,
         Cover,
         HeaderCart,
         ImgCart } from './cartStyle';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    sumAllPrice() {
        const addedGoodsCart = this.props.cartGoods;
        let total = 0;
        for (let i = 0; i < addedGoodsCart.length; i++) {
            total += addedGoodsCart[i].price
        }
        return total
    };

    render() {
        return (
            <Cover>
                <CartBox>
                    <HeaderCart>
                        <p>Shopping Cart</p>
                        <FontAwesomeIcon onClick={this.props.closedCart} icon={faTimesCircle}/>
                    </HeaderCart>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>

                        {
                            this.props.cartGoods.map((element) =>
                            <tr key={element.name}>

                                <ImgCart style={{backgroundImage: `url(${element.img})`}}>
                                </ImgCart>
                                <td>{element.name}</td>
                                <td>{element.price} $</td>
                                <td><input type="number" name="quantity" min="1"/></td>
                                <td><FontAwesomeIcon onClick={() => this.props.deletedGood(element)} icon={faTrashAlt}/>
                                </td>

                            </tr>
                        )
                        }

                    </table>

                    <CartTotalBox>
                        <p>Cart total:</p>
                        <span>{this.sumAllPrice()}</span>
                    </CartTotalBox>

                </CartBox>
            </Cover>
        )
    }
}
Cart.propTypes = {
    cartGoods: PropTypes.string,
    deletedGood: PropTypes.func,
    closedCart: PropTypes.func
};
export default Cart;