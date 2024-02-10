export interface IProductHeaders {
  nameHeader: string;
  priceHeader: string;
}

export function ProductTableHeader(
  productHeaders: IProductHeaders
): JSX.Element {
  return (
    <tr>
      <th colSpan={2}> {productHeaders.nameHeader}</th>
      <th colSpan={2}> {productHeaders.priceHeader}</th>
    </tr>
  );
}
