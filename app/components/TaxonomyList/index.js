import React, { PropTypes } from 'react';
import styles from './styles.scss';

const getTaxonomyTemplate = (taxonomy) => {
  const name = taxonomy.name;
  return [
    <li key={name} className={styles.taxonomy}>{name}</li>,
    taxonomy.root.taxons.map((taxon) => (<li key={`{name} ${taxon.id}`} className={styles.taxon}>{taxon.name}</li>)),
  ];
};

export const TaxonomyList = ({ taxonomies }) => (
  <ul className={styles.taxonomyList}>
    {taxonomies && taxonomies.length > 0 ?
      taxonomies.map((taxonomy) => getTaxonomyTemplate(taxonomy))
      :
        <li>No filter existed</li>
    }
  </ul>
);

TaxonomyList.propTypes = {
  taxonomies: PropTypes.array,
};

export default TaxonomyList;
