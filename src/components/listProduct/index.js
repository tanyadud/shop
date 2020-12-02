import React from 'react';
import PropTypes from 'prop-types';
import {GoodImg,
        ContainerBox,
        GoodDescription,
        GoodPrice,
        Button} from './listProductStyle';


class ListGoods extends React.Component {

    render() {
        return (
            <ContainerBox>
                {
                    this.props.listGoods.map((good) =>
                        <GoodDescription key={good.name}>
                            <GoodImg style={{backgroundImage: `url(${good.img})`}}>
                            </GoodImg>
                            <div>
                                {good.name}
                            </div>
                            <GoodPrice>
                                {good.price + '$'}
                                <div>
                                    {'Rate: ' + good.rate}
                                </div>
                            </GoodPrice>
                            <Button onClick={() => this.props.onBuy(good)}> Add to cart</Button>
                        </GoodDescription>
                    )
                }

            </ContainerBox>
        )
    }
}

ListGoods.propTypes = {
    listGoods: PropTypes.array,
    onBuy: PropTypes.func
}

export default ListGoods;