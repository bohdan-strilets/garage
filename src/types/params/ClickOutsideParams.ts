import { RefObject } from "react";

export type ClickOutsideParams = {
  ref: RefObject<HTMLElement>;
  callback: () => void;
  ignoreRefs: RefObject<HTMLElement>[];
  triggerRef: RefObject<HTMLElement>;
};
