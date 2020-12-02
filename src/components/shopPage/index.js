import React from 'react';
import listGoods from '../../data/goods';
import Header from '../header/index';
import Cart from '../cart/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import FilterProducts from '../filterProducts/index';
import NavMenu from '../navbar/index';
import ListGoods from '../listProduct/index';
import {DivBox, StyleHeader} from './shopPageStyle';

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredList: listGoods,
            addedGood: [],
            showCart: false
        };

        this.chooseGoods = this.chooseGoods.bind(this);
        this.sortGoods = this.sortGoods.bind(this);
        this.searchGood = this.searchGood.bind(this);
        this.showDataCart = this.showDataCart.bind(this);
        this.addGood = this.addGood.bind(this);
        this.closeCart = this.closeCart.bind(this);
        this.deleteGood = this.deleteGood.bind(this);
    };

    chooseGoods(good) {
        if (good === 'All') {
            this.setState({
                filteredList: listGoods,
            });
            return
        }

        const list = listGoods.filter((el) => good === el.category);

        this.setState({
            filteredList: list
        })

    }

    sortGoods(good) {
        this.setState({
            filteredList: good
        })

    }

    searchGood(good) {
        this.setState({
            filteredList: good
        })

    }

    addGood(good) {
        const pushedGood = this.state.addedGood;
        pushedGood.push(good);

        this.setState({
            addedGood: pushedGood
        })
    }

    showDataCart() {
        this.setState({
            showCart: true
        })
    }

    closeCart() {
        this.setState({
            showCart: false
        })
    }

    deleteGood(good) {
        const removedGood = this.state.addedGood.filter((el) => {
            return good.name !== el.name
        });

        this.setState({
            addedGood: removedGood
        })
    }


    render() {
        return (
            <div className="App">
                <StyleHeader>
                    <Header/>
                    {
                        this.state.showCart === true ?

                        <Cart cartGoods={this.state.addedGood}
                               closedCart={this.closeCart}
                               deletedGood={this.deleteGood}
                        />
                        :
                        null
                    }
                    <div>
                        {
                            this.state.addedGood.length !== 0 ?
                            <span>{this.state.addedGood.length}</span>
                            :
                            null
                        }
                        <FontAwesomeIcon onClick={this.showDataCart} icon={faCartPlus}/>
                    </div>

                </StyleHeader>
                <FilterProducts filteredGoods={listGoods}
                       onSort={this.sortGoods}
                       onSearch={this.searchGood}/>
                <DivBox>
                    <NavMenu onItemClick={this.chooseGoods}/>
                    <ListGoods listGoods={this.state.filteredList}
                               onBuy={this.addGood}/>
                </DivBox>
            </div>
        );
    }
}

