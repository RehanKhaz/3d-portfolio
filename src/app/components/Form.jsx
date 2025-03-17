'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react';
import { toast  , ToastContainer} from 'react-toastify';


const Form = () => {
    const [state, handleSubmit] = useForm('xzzezrga');
    const formRef = useRef(null)
    useEffect(() => {
        if (state.succeeded) {
            formRef.current?.reset()
            toast.success('Message Sent Successfully!')
        }
    }, [state.succeeded])

    return (
        <>
            <form onSubmit={handleSubmit} ref={formRef} className='flex flex-col h-full mt-3 gap-5'>
                <label htmlFor="name">
                    <span className='input-label'>Full Name</span>
                    <input  required autoComplete='off' autoFocus name='name' id='name' placeholder='ex.., Rehan Khan' className='input-field' type="text" />
                    <ValidationError
                        prefix="Full Name"
                        field="name"
                        errors={state.errors}
                    />
                </label>    
                <label htmlFor="email">
                    <span className='input-label'>Email Address</span>
                    <input  required name='email' id='email' placeholder='ex.., rehankhaz3666@gmail.com' className='input-field' type="text" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </label>
                <label htmlFor="subject
                            ">
                    <span className='input-label'>Subject</span>
                    <textarea required name='subject' id='subject' placeholder='ex.., I want to build a website for my business' className='input-field' rows={5} />
                    <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                    />
                </label>
                <button className='w-full cursor-pointer text-neutral-300 text-[1.1em] rounded-2xl bg-black/50 px-4 py-3' type='submit'>
                    {state.submitting ? 'Sending ...' : 'Send Message'} <Image alt='Arrow-up' width={10} height={10} src={'/assets/arrow-up.png'} className={'object-cover inline-flex ml-5 '} />

                </button>
            </form>
            <ToastContainer />
        </>
    )
}

export default Form