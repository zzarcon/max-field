import { css, Global } from "@emotion/react";
export const globalStyles = (
  <Global
    styles={{
      body: {
        fontFamily: "Helvetica",
        overflow: 'hidden'
      },
      "*": {
        boxSizing: "content-box",
      },
    }}
  />
);

export const wrapperCss = css({
  // backgroundColor: "red",
})