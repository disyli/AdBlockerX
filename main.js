// ==UserScript==
// @name        removeYinghuaAd
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove ad
// @author       LDC
// @match        http://www.yinghuavideo.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const elementIds = ["HMimageleft", "HMimageright", "HMrichA","mp4richtourl"];
  const elementClasses = ["eb-head-logo", "class2", "class3"];

  function removeElementById(id) {
    const element = document.getElementById(id);
    if (element) {
      element.remove();
    } else {
      console.log(`Element with ID '${id}' not found.`);
    }
  }


  function removeElementsByClassName(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].remove();
    }
  }

    setTimeout(() => {
        elementIds.forEach((id, index) => {
removeElementById(id);
  });

  elementClasses.forEach((className, index) => {
removeElementsByClassName(className);
  });},1000)

})();
