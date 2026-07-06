import React from "react";
import { mount } from "marketing/Marketing";

const Market = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};

export default Market;
