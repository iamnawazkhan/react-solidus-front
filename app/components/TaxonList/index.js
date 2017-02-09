import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

const timeout = 1000;

export default class TaxonList extends Component {
  static propTypes = {
    taxons: PropTypes.array,
    onTaxonSelect: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  state = {
    levels: [],
  };

  onSelect = (taxon, level) => {
    this.clearTimeout();
    this.setState({
      levels: this.state.levels.slice(0, level).concat([taxon.taxons]),
    });
  };

  onListMouseLeave = () => {
    this.clearTimeout();
    this.hideTimeout = setTimeout(() => this.setState({ levels: [] }), timeout);
  };

  clearTimeout = () => {
    clearTimeout(this.hideTimeout);
  };

  chooseTaxon = (taxon) => {
    if (taxon) {
      this.context.router.push(`/shop/${taxon.permalink}`);
      this.props.onTaxonSelect(taxon);
      return;
    }
    this.context.router.push('/shop');
    this.props.onTaxonSelect();
  };

  hideOddLists = (level) => {
    this.clearTimeout();
    this.hideTimeout = setTimeout(() => this.setState({ levels: this.state.levels.slice(0, level) }), timeout);
  };

  renderTaxon = (taxon, level) => {
    if (taxon.taxons.length === 0) {
      return (
        <li
          key={taxon.id}
          className={classNames(styles.taxon, styles.clickable)}
          onMouseEnter={() => this.hideOddLists(level)}
          onClick={() => this.chooseTaxon(taxon)}
        >{taxon.name}</li>
      );
    }

    return (
      <li
        key={taxon.id}
        className={styles.taxon}
        onMouseEnter={() => this.onSelect(taxon, level)}
      >{taxon.name}</li>
    );
  };

  renderMainTaxonList = () => {
    const { taxons } = this.props;
    return (
      <ul key="initialList" className={styles.taxonomyList} onMouseEnter={this.clearTimeout} onMouseLeave={this.onListMouseLeave}>
        <li
          key="home"
          className={classNames(styles.taxon, styles.clickable)}
          onClick={() => this.chooseTaxon()}
          onMouseEnter={() => this.hideOddLists(0)}
        >All goods</li>
        {taxons.filter((taxon) => !taxon.parent_id).map((taxon) => this.renderTaxon(taxon, 0))}
      </ul>
    );
  };

  renderAdditionalTaxonLists = () => this.state.levels.map((level, index) => (
    <ul
      key={`additionalList#${index}`}
      className={classNames(styles.taxonomyList, styles.deepList)}
      style={{ left: `${100 * (index + 1)}%` }}
      onMouseEnter={this.clearTimeout}
      onMouseLeave={this.onListMouseLeave}
    >
      {level.map((taxon) => this.renderTaxon(taxon, index + 1))}
    </ul>
  ));

  render() {
    const { taxons } = this.props;

    return (
      <div className={styles.taxonomyListContainer}>
        {taxons && taxons.length > 0 && this.renderMainTaxonList()}
        {this.renderAdditionalTaxonLists()}
      </div>
    );
  }
}
