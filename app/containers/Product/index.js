import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProduct } from './selectors';
import { selectTaxons } from 'selectors/taxons';
import { getProduct } from './actions';
import { Spinner } from 'components';
import styles from './styles.scss';


@connect(() => createStructuredSelector({
  product: selectProduct(),
  taxons: selectTaxons(),
}), { getProduct })
export default class Product extends Component {
  static propTypes = {
    product: PropTypes.object,
    getProduct: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getProduct(this.props.params.id);
  }

  renderProduct = () => {
    const { product } = this.props;

    return (
      <div className="container">
        <h2 className={styles.title}>{product.name}</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {/* <Gallery images={product.master.images} /> */}
            {product.product_properties.length > 0 && this.renderProperties(product.product_properties)}
          </div>
          <div className="col-sm-12 col-md-6">
            <div>{product.description}</div>
            <div className="row">
              {product.has_variants && this.renderVariants(product.variants)}
              <div className="col-sm-12 col-md-6">
                {product.display_price}
              </div>
            </div>
            {}
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { product } = this.props;
    return product ? this.renderProduct() : <Spinner />;
  }
}
