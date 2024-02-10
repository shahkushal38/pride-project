import { PrimaryButton, Stack, StackItem, TextField } from "@fluentui/react";
import { useCallback, useState } from "react";
import { useStyles } from "./useStyles/useStyles";
import { useNavigate } from "react-router-dom";

interface ILogin {
  setToken: (userName: string, password: string) => void;
}
export function Login(props: ILogin): JSX.Element {
  const { setToken } = props;

  const [userName, setUserName] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  // const navigate = useNavigate();
  const styles = useStyles();

  const handleSubmitClick = useCallback(() => {
    console.log("in submit");
    if (userName && password) {
      setToken(userName, password);
      // navigate("/FirstComponent");
      console.log("In if Login");
    } else {
      alert("Enter proper details");
    }
  }, [password, setToken, userName]);

  return (
    <Stack verticalFill>
      <StackItem>
        <TextField
          label="User Name"
          styles={styles.userField}
          onChange={(_, newValue) => {
            setUserName(newValue);
          }}
        />
      </StackItem>
      <StackItem>
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
      </StackItem>

      <StackItem>
        <PrimaryButton
          text="Submit"
          styles={styles.loginButton}
          onClick={handleSubmitClick}
        />
      </StackItem>
    </Stack>
  );
}
