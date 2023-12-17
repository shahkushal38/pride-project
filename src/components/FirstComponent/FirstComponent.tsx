import { Stack, StackItem } from '@fluentui/react';
import './FirstComponent.css';

export function FirstComponent(): JSX.Element {
  console.log('Inside first component');
  return (
    <Stack verticalFill>
      <StackItem>
        <h1 className="hello"> Hello World</h1>
      </StackItem>
      <StackItem>
        <h1 className="hello"> Hello World</h1>
      </StackItem>
    </Stack>
  );
}
