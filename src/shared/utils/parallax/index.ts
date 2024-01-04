export const applyParallaxEffect = (event: any) => {
  document.querySelectorAll(".parallaxItem").forEach((node: Element) => {
    const movingValue = node.getAttribute("data-parallax-value");
    let x, y;
    if (event.beta) {
      x = (event.beta * +(movingValue as string)) / 250;
      y = (event.gamma * +(movingValue as string)) / 250;
    } else {
      x = (event.clientX * +(movingValue as string)) / 250;
      y = (event.clientY * +(movingValue as string)) / 250;
    }

    //@ts-ignore
    node.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};
