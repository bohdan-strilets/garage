import { useEffect } from "react";
import { KeyPressParams } from "src/types/params/KeyPressParams";

const useKeyPress = (params: KeyPressParams): void => {
  const { targetKey, callback } = params;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === targetKey) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetKey, callback]);
};

export default useKeyPress;
