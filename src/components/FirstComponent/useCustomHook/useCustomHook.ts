import { useMemo } from "react";

export function useCustomHook(tokenValue: string): boolean {
  const checkToken = useMemo(() => {
    if (
      JSON.parse(sessionStorage.getItem("token") as string).token === tokenValue
    ) {
      return true;
    }

    return false;
  }, [tokenValue]);

  return checkToken;
}
