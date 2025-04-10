import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Mesh } from 'three';

const HeroCamera = ({isMobile, children }) => {
  const group = useRef(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta);
    if (!isMobile && group.current) {
      easing.dampE(group.current?.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
