import { useNavigate } from "react-router-dom";
import {
  IProductHeaders,
  ProductTableHeader,
} from "../ProductTableHeader/ProductTableHeader";
import { ProductTableRow } from "../ProductTableRow/ProductTableRow";
import { PrimaryButton } from "@fluentui/react";

export function ProductTable(): JSX.Element {
  const products = [
    <ProductTableRow key={1} productName={"Apple"} productPrice={10} />,
    <ProductTableRow key={2} productName={"Apple"} productPrice={10} />,
  ];

  const navigate = useNavigate();

  const productHeader: IProductHeaders = {
    nameHeader: "Fruit Name",
    priceHeader: "Price",
  };

  return (
    <>
      <table>
        <tbody> {ProductTableHeader(productHeader)}</tbody>
        <tbody>{products}</tbody>
      </table>

      <PrimaryButton
        text="Click Me"
        onClick={() => {
          navigate("/FirstComponent");
        }}
      />
    </>
  );
}
