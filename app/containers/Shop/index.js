import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProducts } from './selectors';
import { selectTaxons } from 'selectors/taxons';
import { selectCartItems } from 'selectors/cart';
import { getProducts, getTaxonProducts } from './actions';
import { getTaxons } from 'reducers/taxons';
import { TaxonList, Product } from 'components';
import styles from './styles.scss';
import classnames from 'classnames';

@connect(() => createStructuredSelector({
  taxons: selectTaxons(),
  products: selectProducts(),
  cart: selectCartItems(),
}), { getTaxons, getProducts, getTaxonProducts })
export default class Shop extends Component {
  static propTypes = {
    taxons: PropTypes.array,
    products: PropTypes.array,
    getTaxons: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    getTaxonProducts: PropTypes.func.isRequired,
    routeParams: PropTypes.object,
    cart: PropTypes.array,
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
    this.setState({
      ...this.state,
      currentTaxon: taxon,
    });
    return taxon ? this.props.getTaxonProducts(taxon.id) : this.props.getProducts();
  };

  openDrawer = () => this.setState({
    ...this.state,
    showDrawer: true,
  });

  closeDrawer = () => this.setState({
    ...this.state,
    showDrawer: false,
  });

  renderContent = () => {
    const { taxons } = this.props;

    return [
      <TaxonList key="taxons" taxons={taxons} onTaxonSelect={this.selectTaxon} />,
      <div key="properties">Properties</div>,
    ];
  };

  render() {
    const { products, cart } = this.props;

    return (
      <div onClick={this.closeDrawer}>
        <div className={styles.leftSidebar}>
          <div className="hidden-xs hidden-sm">
            {this.renderContent()}
          </div>
          <div className={classnames('hidden-md hidden-lg', styles.leftMiniSidebar)} onClick={(e) => e.stopPropagation()}>
            <i className={classnames('fa fa-bars', { [styles.hide]: this.state.showDrawer })} onClick={this.openDrawer} />
            <div className={classnames(styles.drawer, { hidden: !this.state.showDrawer })}>
              <i className={classnames('fa fa-times', styles.close)} onClick={this.closeDrawer} />
              {this.renderContent()}
            </div>
          </div>
        </div>
        <div className="flexList">
          {products && products.length > 0
            ? products.map((product) => <Product
              product={product}
              key={product.id}
              buyed={cart ? !!cart.find((item) => item.product_id === product.id) : false}
            />)
            : <div className="text-center">No products</div>
          }
        </div>
      </div>
    );
  }
}
