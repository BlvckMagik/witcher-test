export const applyParallaxEffect = (event: any) => {
  document.querySelectorAll(".parallaxItem").forEach((node: Element) => {
    const movingValue = node.getAttribute("data-parallax-value");
    const x = (event.clientX * +(movingValue as string)) / 250;
    const y = (event.clientY * +(movingValue as string)) / 250;

    //@ts-ignore
    node.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};
