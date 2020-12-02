import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BoxSearchFilter, ButtonSearch, InputSearch, Label, SelectStyle } from './filterStyle';

class FilterProducts extends React.Component {
    constructor(props) {
        super(props);
        this.sortGoods = this.sortGoods.bind(this);
        this.searchGood = this.searchGood.bind(this);
    };

    FilterOptions = [
        'Most Popular',
        'Price Low to High',
        'Price High to Low'
    ];

    sortGoods(e) {
        const filterBy = e.target.value;
        const list = this.props.filteredGoods;
        let sortedList = null;

        if (filterBy === 'Most Popular') {
            sortedList = list.sort((a, b) => {
                if (b.rate > a.rate) return 1;
                if (b.rate < a.rate) return -1;
                return 0;
            });
        }

        if (filterBy === 'Price Low to High') {
            sortedList = list.sort((a, b) => {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
            });

        }

        if (filterBy === 'Price High to Low') {
            sortedList = list.sort((a, b) => {
                if (b.price > a.price) return 1;
                if (b.price < a.price) return -1;
                return 0;
            });

        }
        this.props.onSort(sortedList)
    };

    searchGood(e) {
        const value = e.target.value;
        const list = this.props.filteredGoods;
        const newList = list.filter((el) => {
            const nameLower = el.name.toLowerCase();
            const valueLower = value.toLowerCase();
            const result = nameLower.indexOf(valueLower);

            return result !== -1

        });
        this.props.onSearch(newList)
    }

    render() {
        return (
            <BoxSearchFilter>
                <Label>Sort by:</Label>
                <SelectStyle onChange={this.sortGoods}>
                    {
                        this.FilterOptions.map((option) => {
                            return <option key={option}>{option}</option>
                        })
                    }
                </SelectStyle>
                <div>
                    <InputSearch type='search' placeholder='Search...'
                                 onChange={this.searchGood}/>
                    <ButtonSearch>
                        <FontAwesomeIcon icon={ faSearch }/>
                    </ButtonSearch>
                </div>
            </BoxSearchFilter>

        )
    }
}
FilterProducts.propTypes = {
    onSort: PropTypes.func,
    filteredGoods: PropTypes.array,
    onSearch: PropTypes.func
};
export default FilterProducts;