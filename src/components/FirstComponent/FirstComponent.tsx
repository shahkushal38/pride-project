import { Stack, StackItem } from "@fluentui/react";
import "./FirstComponent.css";
import { SelectDateAndTime } from "../SelectDataAndTime/SelectDateAndTime";

export function FirstComponent(): JSX.Element {
  console.log("Inside first component");
  return (
    <Stack verticalFill>
      <StackItem>
        <h1 className="hello"> Hello World</h1>
      </StackItem>
      <StackItem>
        <h1 className="hello"> Hello World</h1>
      </StackItem>
      <StackItem>
        <SelectDateAndTime restrictDates={["2024-02-07"]} />
      </StackItem>
    </Stack>
  );
}
