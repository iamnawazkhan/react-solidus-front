import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProduct } from './selectors';
import { selectTaxons } from 'selectors/taxons';
import { getProduct } from './actions';
import { getTaxons } from 'reducers/taxons';
import { Spinner } from 'components';
import styles from './styles.scss';


@connect(() => createStructuredSelector({
  product: selectProduct(),
  taxons: selectTaxons(),
}), { getProduct, getTaxons })
export default class Product extends Component {
  static propTypes = {
    product: PropTypes.object,
    taxons: PropTypes.array,
    getProduct: PropTypes.func.isRequired,
    getTaxons: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { params: { id }, taxons } = this.props;

    this.props.getProduct(id);
    taxons || this.props.getTaxons(); // eslint-disable-line no-unused-expressions
  }

  renderProperties = (properties) => (
    <div className="paper">
      <table style={{ width: '100%' }}>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id} className={styles.property}>
              <td className={styles.name}>{prop.property_name}:</td>
              <td>{prop.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  renderVariants = () => {

  };

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
