window.addEventListener("DOMContentLoaded", () => {
    const slide = document.querySelector(".slide");
    const slide_li = document.querySelectorAll(".slide>li");

    let dragSts = 0;

    function mobileDrag(ele) {
        let m_firstX, m_moveX, moveX;
        let m_lastX = ele.offsetLeft;
        let startX, startY;

        ele.ontouchstart = (e) => {
            event.preventDefault();
            dragSts = 1;
            // let XX = event.currentTarget.touches[0].clientX;
            let startID = event.targetTouches[0].target.id;
            let startX = event.changedTouches[0].pageX;
            let startY = event.changedTouches[0].clientY;
            ele.style.transition = "none";
            m_firstX = startX;
            console.log("touchstart", startX);
        };
        ele.ontouchend = (e) => {
            event.preventDefault();
            dragSts = 0;
            ele.style.transition = ".4s";
            let lastX = e.changedTouches[0].clientX;
            m_lastX = lastX;
            // console.log("touchend", m_lastX);
            divine(ele);
        };
        ele.ontouchmove = (e) => {
            event.preventDefault();
            if (dragSts) {
                // let XX = event.currentTarget.touches[0].clientX;
                let startID = e.targetTouches[0].target.id;
                let moveX = e.changedTouches[0].clientX;
                let moveY = e.changedTouches[0].clientY;
                m_moveX = moveX - m_firstX;

                ele.style.left = m_moveX + "px";
                // if(m_moveX < - 50) ele.style.left = -100 + "px";
                // else if(m_moveX > 50 ) ele.style.left = 100 + "px";
                // else if(m_moveX < 50 && m_moveX > -50) ele.style.left = 0+ "px";

                // console.log("touchmove", m_moveX);

                // if (m_moveX < -50) setTimeout(() => ele.appendChild(slide_li[0]), 100);
            }
        }; //////////// touchmove ////////////
        // m_firstX = m_lastX;

        let winW = 380;
        console.log("가로:", winW);
        // 판별
        function divine(obj) {
            let tgLeft = obj.offsetLeft;
            // let tgPoint = obj.parentElement.clientWidth;
            console.log("tgL", tgLeft);
            // 오른쪽으로 이동
            // if (tgLeft <= -winW * 1.1) {
            if (m_moveX <= -50) {
                obj.style.transition = ".4s";
                obj.appendChild(obj.querySelectorAll("li")[0]);
                obj.style.transition = "none";
                obj.style.left = "0%";
            }
            // 왼쪽으로 이동
            // else if (tgLeft >= -winW * 0.9) {
            else if (m_moveX >= 50) {
                let ltg = obj.querySelectorAll("li");
                tgLeft = obj.offsetLeft
                obj.style.transition = ".4s";
                obj.insertBefore(ltg[ltg.length-1],ltg[0]);
                obj.style.left = "0%";
                obj.style.transition = "none";
            }
            // 제자리
            else {
                obj.style.transition = ".4s";
                obj.style.left = "0%";
            }
            // ele.style.transition = ".4s";
            // ele.style.left = -100 * sno + "%";
        }
    } /////////////////// mobileDrag //////////////////

    // 호출
    mobileDrag(slide);
}); ////////////// 로드구역 ////////////////
