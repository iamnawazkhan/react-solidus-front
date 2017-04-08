import React, { PropTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Button } from 'react-bootstrap';
import { required, maxValue } from 'utils/validators';
import { InputCount } from 'components';
import styles from './product.scss';
import classnames from 'classnames';

@reduxForm({
  form: 'product',
})
export default class ProductForm extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool,
    initialize: PropTypes.func.isRequired,
  };

  componentWillMount = () => {
    this.props.initialize({ count: 1 });
  };

  render() {
    const { total, price, handleSubmit, valid } = this.props;

    return (
      <div>
        <div className={styles.price}>
          <span>Price: </span>
          <span>{price}</span>
        </div>
        <form onSubmit={handleSubmit} className={classnames('form-inline', styles.form)}>
          <Field
            name="count"
            component={InputCount}
            className="input-sm"
            validate={[required, maxValue(total)]}
          />
          <Button type="submit" bsSize="small" disabled={!valid} bsStyle="success"><i className="fa fa-cart-plus icon-before-text" />Add to card</Button>
        </form>
      </div>
    );
  }
}
