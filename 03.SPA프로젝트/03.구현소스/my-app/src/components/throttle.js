import React, { useEffect } from "react";
import { throttle } from "lodash";

const ScrollComponent = () => {
    useEffect(() => {
    const handleScroll = throttle(() => {
      // 스크롤 이벤트 처리 로직
        console.log("스크롤 이벤트 처리");
    }, 200); // 200ms 쓰로틀 시간 설정

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>{/* 컴포넌트 내용 */}</div>;
};

export default ScrollComponent;
