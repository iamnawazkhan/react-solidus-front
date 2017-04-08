import taxonSagas from './taxons';
import authSagas from './auth';

export default [
  ...taxonSagas,
  ...authSagas,
];
