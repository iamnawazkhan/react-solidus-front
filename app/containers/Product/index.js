import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProduct } from './selectors';
import { selectTaxons } from 'selectors/taxons';
import { getProduct } from './actions';
import { getTaxons } from 'reducers/taxons';
import { Spinner, Gallery } from 'components';
import { Nav, NavItem } from 'react-bootstrap';
import styles from './styles.scss';
import { LinkContainer } from 'react-router-bootstrap';
import ProductForm from './ProductForm';

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

  handleSubmit = (data) => {
    console.log(data.toJS());
  };

  renderProperties = () => {
    const { product_properties } = this.props.product;

    return (
      <div className={styles.propListWrapper}>
        <div className="paper">
          <table>
            <tbody>
              {product_properties.map((prop) => (
                <tr key={prop.id} className={styles.property}>
                  <td className={styles.name}>{prop.property_name}:</td>
                  <td>{prop.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  renderVariants = () => {
    const { product } = this.props;

    return (
      <div className="paper">
        <Nav bsStyle="pills" stacked>
          {[
            <LinkContainer key="default" to={`/product/${product.id}`}>
              <NavItem>Default</NavItem>
            </LinkContainer>,
            ...product.variants.map((variant) => (
              <LinkContainer key={variant.id} to={`/product/${product.id}/${variant.id}`}>
                <NavItem>{variant.options_text}</NavItem>
              </LinkContainer>
            )),
          ]}
        </Nav>
      </div>
    );
  };

  renderProduct = () => {
    const { product, params: { variantId } } = this.props;

    const variantItem = variantId ? product.variants.find((variant) => variant.id === +variantId) : product.master;

    return (
      <div>
        <h2 className="text-center">{variantItem.name}</h2>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Gallery images={variantItem.images} />
            {product.product_properties.length > 0 && this.renderProperties(product.product_properties)}
          </div>
          <div className="col-xs-12 col-md-6">
            <div>{product.description}</div>
            <div className={styles.flexWrapper}>
              {product.has_variants && this.renderVariants()}
              <ProductForm total={variantItem.total_on_hand} price={variantItem.display_price} onSubmit={this.handleSubmit} />
            </div>
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
