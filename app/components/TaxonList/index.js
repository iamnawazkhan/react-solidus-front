import React, { PropTypes } from 'react';
import styles from './styles.scss';

const getTaxonomyTemplate = (taxonomy) => {
  const name = taxonomy.name;
  return [
    <li key={name} className={styles.taxonomy}>{name}</li>,
    taxonomy.root.taxons.map((taxon) => (<li key={`{name} ${taxon.id}`} className={styles.taxon}>{taxon.name}</li>)),
  ];
};

export const TaxonList = ({ taxons } /* , { location } */) => (
  <ul className={styles.taxonomyList}>
    {taxons && taxons.length > 0 ?
      taxons.map((taxonomy) => getTaxonomyTemplate(taxonomy))
      :
        <li className={styles.taxon}>No filter existed</li>
    }
  </ul>
);

/*
TaxonList.contextTypes = {
  location: PropTypes.object,
}
*/

TaxonList.propTypes = {
  taxons: PropTypes.array,
};

export default TaxonList;
