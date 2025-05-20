'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InputField from '../elements/input-field';
import TextArea from '../elements/text-area';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const formRefs = useRef({
        name: null as HTMLInputElement | null,
        email: null as HTMLInputElement | null,
        phone: null as HTMLInputElement | null,
        subject: null as HTMLInputElement | null,
        message: null as HTMLTextAreaElement | null,
    });

    useEffect(
        () => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!),
        []
    );

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !formRefs.current.name ||
            !formRefs.current.email ||
            !formRefs.current.phone ||
            !formRefs.current.subject ||
            !formRefs.current.message
        ) {
            return;
        }

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: formRefs.current.name.value,
                email: formRefs.current.email.value,
                phone: formRefs.current.phone.value,
                subject: formRefs.current.subject.value,
                message: formRefs.current.message.value,
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='relative'>
            <form
                className='space-y-4 w-full max-w-5xl'
                onSubmit={handleSubmit}
            >
                <InputField
                    label='Qui êtes-vous ?'
                    ref={(el) => {
                        formRefs.current.name = el;
                    }}
                    type='text'
                    autoComplete='name'
                    inputMode='text'
                    required
                />
                <InputField
                    label='Votre adresse e-mail'
                    ref={(el) => {
                        formRefs.current.email = el;
                    }}
                    type='email'
                    autoComplete='email'
                    inputMode='email'
                    required
                />
                <InputField
                    label='Votre téléphone'
                    ref={(el) => {
                        formRefs.current.phone = el;
                    }}
                    type='tel'
                    autoComplete='tel'
                    inputMode='tel'
                />
                <InputField
                    label='De quoi souhaitez-vous parler ?'
                    ref={(el) => {
                        formRefs.current.subject = el;
                    }}
                    type='text'
                    inputMode='text'
                    required
                />
                <TextArea
                    label='Votre message'
                    ref={(el) => {
                        formRefs.current.message = el;
                    }}
                    required
                />
                <div className='flex justify-end'>
                    <button
                        className='bg-pink-600 text-white text-[17px] font-semibold py-1 px-3 rounded cursor-pointer border border-pink-600 hover:bg-background hover:text-white'
                        disabled={loading}
                    >
                        Envoyer
                    </button>
                </div>
            </form>
            {loading && (
                <div className='absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center flex-col'>
                    <div className='absolute top-0 left-0 bg-background w-full h-full z-10 opacity-80 flex items-center justify-center'>
                        <div className='loader' />
                    </div>
                    <p className='text-3xl font-semibold relative z-20'>
                        Email en court d'envoie
                    </p>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
