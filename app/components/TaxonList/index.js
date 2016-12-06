import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';

const getTaxonomyTemplate = (taxonomy) => {
  const name = taxonomy.name;
  return [
    <li key={name} className={styles.taxonomy}>{name}</li>,
    taxonomy.root.taxons.map((taxon) => (<li key={`{name} ${taxon.id}`} className={styles.taxon}>{taxon.name}</li>)),
  ];
};


export default class TaxonList extends Component {
  static propTypes = {
    taxons: PropTypes.array,
  };

  /*
  static contextTypes = {
   location: PropTypes.object,
  }
  */

  state = {
    selectStack: [],
  };

  renderTaxonList = () => this.selectStack.length > 0 ? this.renderSelectedTaxonList() : this.renderInitialTaxonList();

  renderInitialTaxonList = () => this.props.taxons.filter(taxon => !taxon.parent_id).map(taxon => <li key={taxon.id} className={styles.taxon}>{taxon.name}</li>);

  renderSelectedTaxonList = () => {
    const {taxons} = this.props;
    const {selectedStack} = this.state;
    const result = [];

    if (selectedStack.length > 1) {
      result.push(<li key='reset' className={styles.taxon} onClick={() => this.setState({selectedStack: []})}>Reset</li>)
    }

    return result;
  };

  render () {
    const { taxons } = this.props;

    return (
      <ul className={styles.taxonomyList}>
        {taxons && taxons.length > 0 ?
          this.renderTaxonList()
          :
          <li className={styles.taxon}>No filter existed</li>
        }
      </ul>
    )
  }
}


