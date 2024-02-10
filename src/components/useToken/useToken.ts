export function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token") as string;
    const userToken = JSON.parse(tokenString);
    console.log("User token In get -- ", userToken);
    return userToken?.token;
  };

  //   const [token, setToken] = useState(getToken());

  const saveToken = (username: string, password: string) => {
    console.log("In save token");
    sessionStorage.setItem(
      "token",
      JSON.stringify({ token: username + password })
    );
    // setToken(username + password);
  };

  return {
    getToken,
    saveToken,
  };
}
