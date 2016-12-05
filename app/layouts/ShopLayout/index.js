import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTaxonomies } from './selectors';
import { getTaxonomies } from './actions';
import { TaxonomyList } from 'components';

@connect(() => createStructuredSelector({
  taxonomies: selectTaxonomies(),
}), { getTaxonomies })
export default class ShopLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    taxonomies: PropTypes.array,
    getTaxonomies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { taxonomies } = this.props;

    if (!taxonomies) {
      this.props.getTaxonomies();
    }
  }

  render() {
    const { children, taxonomies } = this.props;

    return (
      <div>
        <TaxonomyList taxonomies={taxonomies} />
        <div>
          {children}
        </div>
      </div>
    );
  }
}
