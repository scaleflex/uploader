export type { Product, ProductFieldKey } from './product.types';
export {
  PRODUCT_REF_KEY,
  PRODUCT_POSITION_KEY,
  PRODUCT_REF_INVALID_CHARS,
  validateProductRef,
  validateProductPosition,
  hasProductData,
  compactProduct,
  mergeProductPatch,
} from './product.constants';
export {
  PRODUCT_REF_FIELD_KEY,
  PRODUCT_POSITION_FIELD_KEY,
  PRODUCT_GROUP_UUID,
  isProductFieldKey,
  productKeyOf,
  makeProductFields,
  makeProductGroup,
  injectProductGroup,
} from './product.fields';
