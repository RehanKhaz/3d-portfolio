'use client'
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Center,  PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../utils/index";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from '../components/Button'
import Rings from "../components/Rings";

const Hero = () => {
  const isSmall = useMediaQuery({ query: '(max-width: 523px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and  ( max-width: 1024px)' })
  const { deskScale, deskPosition,  cubeScale , cubePosition , ringScale , ringPosition , targetScale, reactLogoPosition, reactLogoScale,  targetPosition } = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-dvh relative  flex justify-center mt-[7em] ">
      <div className="flex flex-col   items-center  md:px-2 h-full ">
        <h3 className="text-[1.4em] md:text-[2.1em] font-medium tracking-wider text-white">
          Hi! I am Rehan Khan. <span className="hand-wave">👋</span>
        </h3>
        <h1 className="text-[3em] w-fit max-md:text-[2.3em] max-sm:text-[2.1em] text-center font-extrabold text-[#BEC1CF] tracking-wider ">
          Crafting Products & Brands.
        </h1>
        {/* Animation Part */}
        <div className=" absolute h-full w-full top-[8em]  max-md:top-[5em]  ">
          <Canvas className="w-full    h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[2, 3, 5]} />
              <Center>
                <HeroCamera isMobile={isMobile} >
                  <HackerRoom scale={deskScale} rotation={[0.5, -Math.PI, 0]} position={deskPosition} />
                </HeroCamera>
              </Center>

              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <group>
                <Target position={targetPosition} scale={targetScale} />
                <ReactLogo scale={reactLogoScale} position={reactLogoPosition} />
                <Cube scale={cubeScale} position={cubePosition} />
                <Rings scale={ringScale} position={ringPosition} />
</group>
            </Suspense>
          </Canvas>
          <div className="absolute bottom-[16em] max-sm:bottom-[13em] left-0  w-full flex  justify-center items-center">
            <Button beam href="contact" title={'Turn Ideas into Products'} />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero