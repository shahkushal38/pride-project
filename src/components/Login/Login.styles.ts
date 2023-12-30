/*!
 * Copyright (c) MSCI. All rights reserved.
 * Licensed under the MIT License.
 */

import { IButtonStyles, ITextFieldStyles } from "@fluentui/react";

export interface ILoginStyles {
  loginButton: IButtonStyles;
  userField: ITextFieldStyles;
}

export function buildStyles(): ILoginStyles {
  return {
    loginButton: {
      root: {
        marginTop: 24,
      },
    } as IButtonStyles,
    userField: {
      root: {
        backgroundColor: "yellow",
      },
    } as ITextFieldStyles,
  };
}
