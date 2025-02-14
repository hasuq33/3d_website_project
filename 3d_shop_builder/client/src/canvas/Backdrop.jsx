import { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const BackDrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={3}  // Decreased intensity
        ambient={0.25}
        position={[5, 0, -1]}
      />
      <RandomizedLight
        amount={1}
        radius={9}
        intensity={0.25}
        ambient={0.55}
        position={[-1, 5, -5]}
      />
    </AccumulativeShadows>
  );
};

export default BackDrop;
