'use client'
import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import Button from '../components/Button'
import { OrbitControls, Center, PerspectiveCamera, useTexture } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'

const BentoGrid = ({ src, title, containerClass, desc }) => {
  return (
    <div className={`grid-container ${containerClass}`}>
      <Image
        src={src}
        alt={title}
        height={300}
        width={300}
        className='object-cover pointer-events-none sm:h-[300px]'
      />
      <h3 className='bento-grid-head'>{title}</h3>
      <p className='bento-grid-desc'>{desc}</p>
    </div>
  )
}

const Globe = () => {
    const earthTexture = useTexture('/assets/earth.jpg')
  return (
    <Center>
    <mesh
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, Math.PI, 0]}
      >
        <sphereGeometry />
        <meshMatcapMaterial map={earthTexture} />
    </mesh>
        </Center>
  )
}

const About = () => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('rehankhaz3666@gmail.com')
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <section id='about' className='min-h-dvh padding  '>
      <div className='grid mt-10 max-md:mt-0 grid-cols-1   xl:grid-rows-6 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        <BentoGrid
          src='/assets/grid1.png'
          title={"Hi! I'm Rehan Khan."}
          desc={
            'With 1 + years of experience, I have honed my skills in Full Stack Development, creating dynamic ,scalable  and responsive websites.'
          }
          containerClass='col-span-1  xl:row-span-3  '
        />

        <BentoGrid
          src='/assets/grid2.png'
          title={'Tech Stack.'}
          desc={
            'I  build high-performance web applications using Next.js (the fastest React framework), TypeScript, and modern tools like Stripe and Sanity to deliver scalable, user-centric solutions.'
          }
          containerClass='col-span-1  xl:row-span-3 '
        />

        <div className='col-span-1  xl:row-span-4'>
          <div className='grid-container'>
            <Canvas className='w-full h-full '>
              <Suspense fallback={<CanvasLoader />}>
                <Globe />
                <PerspectiveCamera position={[3, 4, 3]} />
                <OrbitControls
                  enableRotate={true}
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={true}
                  autoRotateSpeed={5}
                  dampingFactor={0.05}
                  rotateSpeed={0.5}
                />
                <ambientLight intensity={0.5} color={'0x#000'} />
                <directionalLight intensity={1} />
              </Suspense>
            </Canvas>

            <h3 className='bento-grid-head'>
              I’m very flexible with time zone communications & locations.
            </h3>
            <p className='bento-grid-desc'>
              Based in Karachi, Pakistan, I collaborate remotely across time
              zones to align with your schedule.
            </p>
            <Button
              beam
              title={"Let's Discuss"}
              containerClass='w-full'
              href={'contact'}
            />
          </div>
        </div>

        <BentoGrid
          src='/assets/grid3.png'
          title={'My Passion For Coding.'}
          desc={
            'Solving problems with code fuels me. Tech isn’t just my job—it’s my playground. I obsess over mastering frameworks and pushing my limits..'
          }
          containerClass='xl:col-span-2  xl:row-span-3 '
        />

        <div className='xl:col-span-1 flex flex-col p-4 items-center justify-center  bg-[#0E0E10] border-[1.8px] rounded-xl border-[#1C1C1C] xl:row-span-2'>
          <Image
            src='/assets/grid4.png'
            alt='grid-4'
            width={200}
            height={200}
            className='scale-[1.6] mt-8 pointer-events-none'
          />
          <p className='text-lg  text-[#A2A3A9]'>Contact me</p>
          <div className='flex-center gap-3'>
            <div
              className='flex-center cursor-pointer'
              onClick={() => handleCopy()}
            >
              <Image
                className='inline-flex object-cover pointer-events-none'
                src={isCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                alt='copy'
                width={40}
                height={40}
              />
            </div>
            <h3 className='text-xl font-medium text-white'>
              rehankhaz3666@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
