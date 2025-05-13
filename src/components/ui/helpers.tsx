
import React from 'react';

export const triggerTabClick = (selector: string) => {
  const element = document.querySelector(selector);
  if (element && element instanceof HTMLElement) {
    element.click();
  }
};
