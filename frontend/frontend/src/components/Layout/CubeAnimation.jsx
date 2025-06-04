import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const CubeAnimation = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;
    const rotate = Math.sin(t / 20000) * 300;
    const y = (1 + Math.sin(t / 3000)) * -15;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <>
      <div className="perspective-[800px] w-[200px] h-[200px]  mt-10">
        <div className="relative w-full h-full preserve-3d" ref={ref}>
          <div className="side front flex justify-center items-center text-center text-3xl font-extrabold text-[#030303]">Shop Now</div>
          <div className="side back flex justify-center items-center text-center text-3xl font-extrabold text-[#040404]" >Buy Today</div>
          <div className="side right flex justify-center items-center text-center text-3xl font-extrabold text-[#010101]" >Order Now</div>
          <div className="side left flex justify-center items-center text-center text-3xl font-extrabold text-[#030303]" >Start Shopping</div>
          <div className="side top flex justify-center items-center text-center text-3xl font-extrabold text-[#060606]" >Add to Cart</div>
          <div className="side bottom flex justify-center items-center text-center text-3xl font-extrabold text-[#060606]" >Get It Now</div>
        </div>
      </div>

      <style jsx="true">{`
        .side {
          position: absolute;
          width: 80%;
          height: 80%;
          opacity: 0.6;
        }

        .front {
          transform: rotateY(0deg) translateZ(80px);
          background: rgba(255, 0, 0, 0.5);
        }

        .back {
          transform: rotateY(180deg) translateZ(80px);
          background: rgba(0, 255, 0, 0.5);
        }

        .right {
          transform: rotateY(90deg) translateZ(80px);
          background: rgba(0, 0, 255, 0.5);
        }

        .left {
          transform: rotateY(-90deg) translateZ(80px);
          background: rgba(255, 255, 0, 0.5);
        }

        .top {
          transform: rotateX(90deg) translateZ(80px);
          background: rgba(0, 255, 255, 0.5);
        }

        .bottom {
          transform: rotateX(-90deg) translateZ(80px);
          background: rgba(255, 0, 255, 0.5);
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </>
  );
};

export default CubeAnimation;
