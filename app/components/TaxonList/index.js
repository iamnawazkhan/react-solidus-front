import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import classNames from 'classnames';

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
    this.setState({
      levels: this.state.levels.slice(0, level).concat([taxon.taxons]),
    });
  };

  onListMouseEnter = () => {
    clearTimeout(this.hideTimeout);
  };

  onListMouseLeave = () => {
    this.hideTimeout = setTimeout(() => this.setState({ levels: [] }), 1000);
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

  renderTaxon = (taxon, level) => {
    if (taxon.taxons.length === 0) {
      return (
        <li
          key={taxon.id}
          className={classNames(styles.taxon, styles.clickable)}
          onMouseEnter={() => this.setState({ levels: this.state.levels.slice(0, level) })}
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
      <ul key="initialList" className={styles.taxonomyList} onMouseEnter={this.onListMouseEnter} onMouseLeave={this.onListMouseLeave}>
        {taxons && taxons.length > 0
          ?
          [
            <li
              key="home"
              className={classNames(styles.taxon, styles.clickable)}
              onClick={() => this.chooseTaxon()}
              onMouseEnter={() => this.setState({ levels: [] })}
            >Home</li>,
            taxons.filter((taxon) => !taxon.parent_id).map((taxon) => this.renderTaxon(taxon, 0)),
          ]
          :
            <li className={styles.taxon}>No filter existed</li>
        }
      </ul>
    );
  };

  renderAdditionalTaxonLists = () => this.state.levels.map((level, index) => (
    <ul
      key={`additionalList#${index}`}
      className={classNames(styles.taxonomyList, styles.deepList)}
      style={{ left: `${100 * (index + 1)}%` }}
      onMouseEnter={this.onListMouseEnter}
      onMouseLeave={this.onListMouseLeave}
    >
      {level.map((taxon) => this.renderTaxon(taxon, index + 1))}
    </ul>
  ));

  render() {
    return (
      <div>
        {this.renderMainTaxonList()}
        {this.renderAdditionalTaxonLists()}
      </div>
    );
  }
}
