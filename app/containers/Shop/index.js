import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTaxons, selectProducts } from './selectors';
import { getTaxons, getProducts, getTaxonProducts } from './actions';
import { TaxonList, ProductList } from 'components';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';

@connect(() => createStructuredSelector({
  taxons: selectTaxons(),
  products: selectProducts(),
}), { getTaxons, getProducts, getTaxonProducts })
export default class Shop extends Component {
  static propTypes = {
    taxons: PropTypes.array,
    products: PropTypes.array,
    getTaxons: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    getTaxonProducts: PropTypes.func.isRequired,
    routeParams: PropTypes.object,
  };

  state = {};

  componentDidMount() {
    const { taxons, routeParams } = this.props;

    if (!taxons) {
      this.props.getTaxons();
    }

    if (!routeParams) {
      this.props.getProducts();
    } else if (taxons) {
      this.selectTaxon(taxons.find((taxon) => taxon.permalink === routeParams.splat));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { routeParams } = this.props;

    if (!(nextProps.taxons && (nextProps.routeParams || routeParams))) return;

    if (routeParams && !nextProps.routeParams) {
      this.props.getProducts();
      return;
    }

    if (!isEqual(nextProps.routeParams, routeParams) || (get(nextProps, 'routeParams.splat') && !this.state.currentTaxon)) {
      this.selectTaxon(nextProps.taxons.find((taxon) => taxon.permalink === nextProps.routeParams.splat));
    }
  }

  selectTaxon = (taxon) => {
    this.setState({ currentTaxon: taxon });
    return taxon ? this.props.getTaxonProducts(taxon.id) : this.props.getProducts();
  };

  render() {
    const { products, taxons } = this.props;

    return (
      <div>
        <TaxonList taxons={taxons} onTaxonSelect={this.selectTaxon} />
        <ProductList products={products} />
      </div>
    );
  }
}
