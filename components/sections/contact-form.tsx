'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InputField from '../elements/input-field';
import TextArea from '../elements/text-area';
import Image from 'next/image';
import Button from '../elements/button';

const ContactForm = () => {
    const [infoMessage, setInfoMessage] = useState<string | undefined>(
        undefined
    );

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

        let hasSendingError = false;

        try {
            setInfoMessage('loading');
            await emailjs.send(serviceId, templateId, {
                name: formRefs.current.name.value,
                email: formRefs.current.email.value,
                phone: formRefs.current.phone.value,
                subject: formRefs.current.subject.value,
                message: formRefs.current.message.value,
            });
        } catch (error) {
            hasSendingError = true;
            console.log('Sending error' + error);
            setInfoMessage('errorGif');
            setTimeout(() => {
                setInfoMessage('errorMessage');
            }, 2500);
        } finally {
            if (!hasSendingError) {
                setInfoMessage('sendGif');
                setTimeout(() => {
                    setInfoMessage('sendMessage');
                }, 4000);
            }
        }
    };

    return (
        <div className='relative'>
            <form
                className='space-y-4 w-full max-w-5xl'
                style={infoMessage ? { opacity: 0 } : undefined}
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
                        disabled={infoMessage !== undefined}
                    >
                        Envoyer
                    </button>
                </div>
            </form>
            {infoMessage && (
                <div className='absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center flex-col'>
                    {infoMessage === 'loading' && (
                        <>
                            <div className='absolute place-self-center z-10 opacity-80 loader' />
                            <p className='text-4xl font-bold relative z-20'>
                                E-mail en cours d&rsquo;envoie
                            </p>
                        </>
                    )}
                    {infoMessage === 'sendGif' && (
                        <>
                            <Image
                                src='/images/dunk-email-send.gif'
                                alt="Dunk d'e-mail"
                                width={640}
                                height={400}
                                unoptimized
                            />
                        </>
                    )}
                    {infoMessage === 'sendMessage' && (
                        <div className='relative z-20 border border-white  h-full w-full flex justify-center items-center'>
                            <p className='text-4xl text-center font-bold'>
                                Merci pour votre message, il a bien été envoyé.
                                Je vous répondrais dès que{' '}
                                <span className='text-nowrap'>possible !</span>
                            </p>
                        </div>
                    )}
                    {infoMessage === 'errorGif' && (
                        <>
                            <Image
                                src='/images/bug-email-send.gif'
                                alt="Dunk d'e-mail"
                                width={640}
                                height={400}
                                unoptimized
                            />
                        </>
                    )}
                    {infoMessage === 'errorMessage' && (
                        <div className='relative z-20 border border-white  h-full w-full flex flex-col justify-center items-center gap-6'>
                            <p className='text-4xl text-center font-bold'>
                                Oh non, un bug... Veuillez me contacter
                                directement à travers mon adresse{' '}
                                <span className='text-nowrap'>e-mail</span>
                            </p>
                            <Button
                                href='mailto:contact@quentin-sebire.fr'
                                label='Envoyer un message'
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ContactForm;
