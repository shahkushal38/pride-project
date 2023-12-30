/*!
 * Copyright (c) MSCI. All rights reserved.
 * Licensed under the MIT License.
 */

import { useMemo } from "react";
import { ILoginStyles, buildStyles } from "../Login.styles";

export function useStyles(): ILoginStyles {
  return useMemo(() => {
    return buildStyles();
  }, []);
}
