'use client';

import { forwardRef, useCallback, useState } from 'react';
import { slugify } from '@/lib/utils';

const REGEX_PATTERNS = {
    tel: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
};

const ERROR_MESSAGES = {
    default: 'Merci de compléter ce champ',
    tel: "Le numéro de téléphone renseigné n'est pas valide",
    email: "L'adresse e-mail renseignée n'est pas valide",
};

type InputFieldProps = {
    label: string;
    type?: React.HTMLInputTypeAttribute;
    required?: boolean;
    defaultValue?: string;
} & Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'required' | 'defaultValue'
>;

const validateInput = (value: string, type: React.HTMLInputTypeAttribute) => {
    if (type !== 'tel' && type !== 'email') {
        return true;
    }

    const regex = new RegExp(
        REGEX_PATTERNS[type as keyof typeof REGEX_PATTERNS]
    );

    return regex.test(value);
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, type, required, defaultValue, ...props }, ref) => {
        const inputId = slugify(label);
        const errorId = `${inputId}-error`;

        const [inputState, setInputState] = useState({
            focused: false,
            value: defaultValue || '',
            error: false,
            errorMessage: ERROR_MESSAGES.default,
        });

        const handleFocus = useCallback(() => {
            setInputState((prev) => ({ ...prev, focused: true }));
        }, []);

        const handleBlur = useCallback(() => {
            setInputState((prev) => ({ ...prev, focused: false }));
        }, []);

        const handleChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;

                let error = false;
                let errorMessage = ERROR_MESSAGES.default;

                if (required && value === '') {
                    error = true;
                } else if (
                    value !== '' &&
                    (type === 'tel' || type === 'email')
                ) {
                    if (!validateInput(value, type)) {
                        error = true;
                        errorMessage =
                            ERROR_MESSAGES[type as keyof typeof ERROR_MESSAGES];
                    }
                }

                setInputState((prev) => ({
                    ...prev,
                    value,
                    error,
                    errorMessage,
                }));
            },
            [required, type]
        );

        const labelStyle =
            inputState.focused || inputState.value !== ''
                ? {
                      left: '0px',
                      top: '0',
                      transform: 'translateY(0)',
                      fontSize: '16px',
                  }
                : {
                      left: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '18px',
                  };

        const blockStyle = {
            paddingTop:
                inputState.focused || inputState.value !== '' ? '1.5rem' : '0',
        };

        return (
            <div>
                <div
                    className='relative transition-all duration-500'
                    style={blockStyle}
                >
                    <label
                        htmlFor={inputId}
                        className='text-base absolute transition-all duration-500'
                        style={labelStyle}
                    >
                        {label} {required && ' *'}
                    </label>
                    <input
                        ref={ref}
                        type={type}
                        id={inputId}
                        required={required}
                        defaultValue={defaultValue}
                        className='w-full bg-transparent border border-white rounded py-1 px-2 text-lg font-medium focus-visible:outline-none'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        aria-invalid={inputState.error}
                        aria-describedby={
                            inputState.error ? errorId : undefined
                        }
                        {...props}
                    />
                </div>
                {inputState.error && (
                    <p
                        id={errorId}
                        className='text-red-500 pt-1 z-20 relative'
                    >
                        {inputState.errorMessage}
                    </p>
                )}
            </div>
        );
    }
);

InputField.displayName = 'InputField';
export default InputField;
