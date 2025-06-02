import { LucideIcon, Mail, Phone, Pin } from 'lucide-react';
import ContactForm from './contact-form';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const ContactTextElement = ({
    label,
    text,
    icon: Icon,
    href,
}: {
    label: string;
    text: string;
    icon: LucideIcon;
    href?: string;
}) => {
    const content = (
        <div>
            <div className='flex items-center gap-2 text-pink-600 text-xl'>
                <Icon size={20} />
                <p>{label} :</p>
            </div>
            <p
                className='text-2xl font-medium'
                style={
                    href
                        ? {
                              textDecoration: 'underline',
                              textDecorationThickness: '1px',
                              textUnderlineOffset: '3px',
                          }
                        : undefined
                }
            >
                {text}
            </p>
        </div>
    );

    return href ? (
        <div>
            <Link
                href={href}
                target='_blank'
                className='w-fit block'
            >
                {content}
            </Link>
        </div>
    ) : (
        content
    );
};

const ContactSection = () => {
    const titleCSS =
        'hidden lg:block absolute -bottom-[3vw] -left-[3vw] text-[8vw] text-nowrap leading-none font-bold z-30 pointer-events-none';

    return (
        <div className='min-h-screen z-[70] gradient-background-animated relative flex justify-center items-center'>
            <div className='relative w-11/12 sm:w-4/5 max-w-screen-xl lg:-mt-[100px]'>
                <div className='absolute top-0 left-0 w-full h-full bg-background opacity-90 rounded-lg' />
                <div className='grid lg:grid-cols-5 gap-14 lg:gap-6 rounded-lg px-10 pt-10 pb-10 lg:pb-[4vw] relative z-10'>
                    <div className='lg:col-span-2 flex flex-col gap-4 justify-between'>
                        <div className='space-y-4'>
                            <ContactTextElement
                                label='Téléphone'
                                text='06•74•65•62•Vingt-trois'
                                icon={Phone}
                            />
                            <ContactTextElement
                                label='Adresse e-mail'
                                text='contact@quentin-sebire.fr'
                                icon={Mail}
                                href='mailto:contact@quentin-sebire.fr'
                            />
                            <ContactTextElement
                                label='Localisation'
                                text='Chartrons - Bordeaux'
                                icon={Pin}
                                href='https://www.google.com/maps/place/quartier+des+Chartrons,+Bordeaux/@44.8573655,-0.5792191,15z/data=!3m1!4b1!4m6!3m5!1s0xd55287befaf579d:0x4089daed22d8c405!8m2!3d44.8583143!4d-0.5668672!16s%2Fg%2F121bw9rj?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D'
                            />
                        </div>
                    </div>
                    <div className='lg:col-span-3'>
                        <ContactForm />
                    </div>
                </div>
                <h2 className={cn(titleCSS, 'z-30')}>Contactez-moi</h2>
                <p
                    className={cn(
                        titleCSS,
                        'z-20 gradient-background-text-animated'
                    )}
                    style={{
                        WebkitTextStroke: 6,
                    }}
                >
                    Contactez-moi
                </p>
            </div>
        </div>
    );
};

export default ContactSection;
