import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProducts } from './selectors';
import { selectTaxons } from 'selectors/taxons';
import { getProducts, getTaxonProducts } from './actions';
import { getTaxons } from 'reducers/taxons';
import { TaxonList, ProductList } from 'components';
import styles from './styles.scss';

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
    const { taxons, routeParams: { splat } } = this.props;

    if (!taxons) {
      this.props.getTaxons();
    }

    if (!splat) {
      this.props.getProducts();
    } else if (taxons) {
      this.selectTaxon(taxons.find((taxon) => taxon.permalink === splat));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { routeParams: { splat } } = this.props;

    if (!(nextProps.taxons && (nextProps.routeParams.splat || splat))) return;

    if (splat && !nextProps.routeParams.splat) {
      this.props.getProducts();
      return;
    }

    if (nextProps.routeParams.splat !== splat || (nextProps.routeParams.splat && !this.state.currentTaxon)) {
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
        <div className={styles.leftSidebar}>
          <TaxonList taxons={taxons} onTaxonSelect={this.selectTaxon} />
          <div>Properties</div>
        </div>
        <ProductList products={products} />
      </div>
    );
  }
}
