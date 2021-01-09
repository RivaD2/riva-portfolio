import React, { useCallback, useEffect, useState } from 'react';

const Parallax = props  => {
  const relativeShift = props.shift || 1.2;
  const [bounds, setBounds] = useState([])
  const [containerRef, setContainerRef] = useState()
  const [shiftOffset, setShiftOffset] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const onScroll = (__e) => {
    setScrollY(window.scrollY);
  }
  const containerRefCallback = useCallback(element => {
    if(!element) return;
    setContainerRef(element);
    let startY, endY, screenHeight = window.innerHeight;
    startY = element.offsetTop;
    endY = element.offsetTop + element.offsetHeight;
    element.children[0].style.height = element.offsetHeight + (element.offsetHeight * (relativeShift - 1) * 2) + "px";
    setBounds([startY - screenHeight, endY + screenHeight]);
    setShiftOffset(element.offsetHeight * relativeShift - element.offsetHeight)
    window.addEventListener('scroll', onScroll);
  }, [relativeShift]);
  useEffect(() => {
    if (!containerRef || scrollY < bounds[0] || scrollY > bounds[1]) {
        return;
    }
    const { offsetTop, offsetHeight, children } = containerRef;
    const topOffset = offsetTop - scrollY;
    const screenHeight = window.innerHeight;
    const style = children[0].style;
    // Only if the element is in view, handle some scroll behavior
    if (topOffset > 0 - offsetHeight ) {
        let pctOffset = 1 - (topOffset / screenHeight);
        style.transform = "translateY(" + (shiftOffset * pctOffset * -1) + "px)";
    }
  }, [scrollY]);

  return (
    <div ref={containerRefCallback} className={props.className}
      style={{position: "relative", overflow: "hidden", boxSizing: "border-box"}}
      >
      <div className={props.innerClassName}>
          {props.children}
      </div>
    </div>
  )
}

export default Parallax;
