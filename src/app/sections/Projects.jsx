'use client'
import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../components/CanvasLoader'
import ComputerModel from '../components/ProjectsComputer'
import { Center, OrbitControls } from '@react-three/drei'

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    useGSAP(() => {
        gsap.fromTo('#animated-text', {
            opacity: 0
        }, {
            opacity: 1,
            duration: 2,
            ease: 'power2.inOut',
        })
    }, [selectedProjectIndex])

    const currentProject = myProjects[selectedProjectIndex]
    const projectCount = myProjects.length
    const handleProject = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'prev') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else if (direction === 'next') {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };



    return (
        <section id='projects' className='min-h-[50vh] w-dvw mt-10 padding'>
            <h1 className='text-neutral-400 text-[2.2em] font-semibold tracking-wide'>My Projects.</h1>
            {/* Main Container */}
            <div className='grid grid-cols-2 gap-10 mt-6 max-md:grid-cols-1 w-full h-full'>

                {/* Project Information */}
                <div className=' bg-black/50 rounded-2xl shadow-[-0.1px_0.1px_5px_rgb(255,255,255)] overflow-hidden p-4 relative col-span-1 '>
                    <div className='flex flex-col  gap-4  w-full '>
                        <div className='absolute top-0 right-0'>
                            <Image className={'object-cover'} alt={'spot-light'} src={currentProject.spotlight} width={400} height={400} />
                        </div>
                        <div style={{
                            background: currentProject.logoStyle?.background || '',
                            backgroundColor: currentProject.logoStyle.backgroundColor,
                            border: currentProject.logoStyle.border,
                            boxShadow: currentProject.logoStyle.boxShadow,
                        }} className={`p-3 w-fit rounded-lg`}>
                            <Image className={'object-cover'} alt={'spot-light'} src={currentProject.logo} width={30} height={30} />
                        </div>
                        <h3 id='animated-text' className='bento-grid-head mt-4 '>
                            {currentProject.title}
                        </h3>
                        <p id='animated-text' className='bento-grid-desc'>
                            {currentProject.desc}
                        </p>
                        <p id='animated-text' className='bento-grid-desc'>
                            {currentProject.subdesc}
                        </p>
                        <div className='flex-between max-md:flex-col  mt-5 w-full'>
                            <div className='flex-center gap-2'>

                                {currentProject.tags.map((tag) => {
                                    return <div key={tag.id} className='w-[3em] p-1 h-[3em] flex-center
                                    
                                     rounded-lg bg-[#1A1A1C]'> <Image key={tag.id} src={tag.path} alt={tag.name} className='object-cover' width={35}  height={35} />
                                    </div>
                                })}

                            </div>
                            <Link href={currentProject.href} target='_blank' className='flex-center mt-4 gap-3'>
                                <p className='text-neutral-600 font-medium  text-[1.1em]'>Live Site Demo</p>
                                <Image src={'/assets/right-arrow.png'} className='rotate-[-30deg] object-cover  ' alt='link' width={18} height={18} />
                            </Link>
                        </div>
                        <div className='flex-between cursor-pointer mt-4 w-full'>
                            <div onClick={() => handleProject('prev')} className='flex-center bg-gradient-to-r from-[#131315]  to-black p-3 rounded-full '>
                                <Image src={'/assets/left-arrow.png'} alt='left-arrow' width={20} height={20} />
                            </div>
                            <div onClick={() => handleProject('next')} className='flex-center bg-gradient-to-r from-[#131315] cursor-pointer  to-black p-3 rounded-full '>
                                <Image src={'/assets/right-arrow.png'} alt='left-arrow' width={20} height={20} />
                            </div>

                        </div>
                    </div>
                </div>
                {/* 3d Model */}
                <div className=' rounded-2xl max-md:h-[50vh] h-full border-neutral-600 border-[1.2px] bg-[#0E0E10]/70 w-full py-4 col-span-1'>
                    <Canvas className='w-full  h-full'>
                        <Suspense fallback={<CanvasLoader />}>
                            <Center >

                                <ComputerModel texture={currentProject.texture} position={[0, -1.5, 0]} scale={2} />
                                <ambientLight color={'white'} intensity={Math.PI} />
                                <directionalLight position={[10, 10, 10]} intensity={1} />
                                <OrbitControls
                                    maxPolarAngle={Math.PI / 2}
                                    enableZoom={false}
                                />

                            </Center>
                        </Suspense>
                    </Canvas>

                </div>

            </div>
        </section>
    )
}

export default Projects