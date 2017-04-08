import map from 'lodash/map';

const stringify = (attrName, attrValue, isObjectKey) => {
  const key = isObjectKey ? `[${attrName}]` : attrName;

  if ( typeof attrValue === 'object' && !(attrValue instanceof Array) ) {
    return map(attrValue, (value, name) => key + stringify(name, value, true)).join('&');
  }

  return key + '=' + (attrValue instanceof Array ? attrValue.join(',') : attrValue);
};

export default (obj) => '?' + map(obj, (value, key) => stringify(key, value, false)).join('&');
