import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTaxons } from './selectors';
import { getTaxons } from './actions';
import { TaxonList } from 'components';

@connect(() => createStructuredSelector({
  taxons: selectTaxons(),
}), { getTaxons })
export default class ShopLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    taxons: PropTypes.array,
    getTaxons: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { taxons } = this.props;

    if (!taxons) {
      this.props.getTaxons();
    }
  }

  render() {
    const { children, taxons } = this.props;

    return (
      <div>
        <TaxonList taxons={taxons} />
        <div>
          {children}
        </div>
      </div>
    );
  }
}
