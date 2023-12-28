import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { useState } from "react";

export function Login(): JSX.Element {
  const [userName, setUserName] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");

  console.log("username - ", userName);
  console.log("password - ", password);
  return (
    <Stack verticalFill>
      <TextField
        label="User Name"
        onChange={(_, newValue) => {
          setUserName(newValue);
        }}
      />

      <TextField
        label="Password"
        required
        type="password"
        canRevealPassword
        revealPasswordAriaLabel="Show password"
        onChange={(_, newValue) => {
          setPassword(newValue);
        }}
      />

      <PrimaryButton />
    </Stack>
  );
}
