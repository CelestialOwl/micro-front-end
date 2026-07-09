import React from "react";
import { mount } from "marketing/Marketing";
import { useHistory } from "react-router-dom";

const Market = () => {
  const ref = React.useRef(null);
  const history = useHistory();

  React.useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        onNavigate: (arg) => {
          history.push(arg.pathname);
        },
      });
      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={ref} />;
};

export default Market;
