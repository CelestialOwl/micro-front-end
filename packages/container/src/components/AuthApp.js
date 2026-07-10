import React from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const Market = () => {
  const ref = React.useRef(null);
  const history = useHistory();

  React.useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
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
