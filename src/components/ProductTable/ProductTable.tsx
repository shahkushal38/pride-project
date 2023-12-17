import { IProductHeaders, ProductTableHeader } from '../ProductTableHeader/ProductTableHeader';
import { ProductTableRow } from '../ProductTableRow/ProductTableRow';

export function ProductTable(): JSX.Element {
  const products = [
    <ProductTableRow key={1} productName={'Apple'} productPrice={10} />,
    <ProductTableRow key={2} productName={'Apple'} productPrice={10} />,
  ];

  const productHeader: IProductHeaders = {
    nameHeader: 'Fruit Name',
    priceHeader: 'Price',
  };

  return (
    <table>
      <tbody> {ProductTableHeader(productHeader)}</tbody> <tbody>{products}</tbody>
    </table>
  );
}
