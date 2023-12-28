export interface IProduct {
  productName: string;
  productPrice: number;
}

export function ProductTableRow(props: IProduct): JSX.Element {
  const { productName, productPrice } = props;

  return (
    <tr>
      <td>{productName}</td>
      <td>{productPrice}</td>
    </tr>
  );
}

