import { Stack, StackItem } from "@fluentui/react";
import "./FirstComponent.css";
import { SelectDateAndTime } from "../SelectDataAndTime/SelectDateAndTime";
import { IFirstComponent } from "./FirstComponent.types";
import { useCustomHook } from "./useCustomHook/useCustomHook";

export function FirstComponent(props: IFirstComponent): JSX.Element {
  const { getToken } = props;
  console.log("Inside first component");

  const value = getToken();
  const checkToken = useCustomHook(value);

  function renderDateAndTime() {
    if (checkToken) {
      return <SelectDateAndTime restrictDates={["2024-02-07"]} />;
    }
    return <></>;
  }
  return (
    <Stack verticalFill>
      <StackItem>
        <h1 className="hello"> Hello World</h1>
      </StackItem>
      <StackItem>
        <h1 className="hello"> Hello World</h1>
      </StackItem>
      <StackItem>{renderDateAndTime()}</StackItem>
    </Stack>
  );
}
