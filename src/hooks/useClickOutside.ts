import { useEffect, useRef } from "react";
import { ClickOutsideParams } from "src/types/params/ClickOutsideParams";

const useClickOutside = (params: ClickOutsideParams): void => {
  const { ref, callback, ignoreRefs = [], triggerRef } = params;
  const ignoreTriggerRef = useRef(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (
        !ignoreTriggerRef.current &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        let isOutside = true;

        ignoreRefs.forEach((ignoreRef) => {
          if (
            ignoreRef.current &&
            ignoreRef.current.contains(e.target as Node)
          ) {
            isOutside = false;
          }
        });

        if (isOutside) {
          callback();
        }
      }
    };

    const handleDocumentClick = (e: MouseEvent): void => {
      if (triggerRef.current && triggerRef.current.contains(e.target as Node)) {
        ignoreTriggerRef.current = true;
        return;
      }

      ignoreTriggerRef.current = false;
      handleClickOutside(e);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [ref, callback, ignoreRefs, triggerRef, ignoreTriggerRef]);
};

export default useClickOutside;
