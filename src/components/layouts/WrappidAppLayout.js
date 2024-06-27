// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import {
  CoreLayoutPlaceholder,
  CoreResourceContext
} from "@wrappid/core";

export default function WrappidAppLayout() {
  // eslint-disable-next-line no-unused-vars
  const resources = React.useContext(CoreResourceContext);

  return (
    <>
      <CoreLayoutPlaceholder id={WrappidAppLayout.PLACEHOLDER.CONTENT} />
     
    </>
  );
}

WrappidAppLayout.PLACEHOLDER = { CONTENT: "content" };
