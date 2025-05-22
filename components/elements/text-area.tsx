'use client';

import { forwardRef, useCallback, useState } from 'react';
import { slugify } from '@/lib/utils';

type TextAreaPorps = {
    label: string;
    required?: boolean;
    defaultValue?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaPorps>(
    ({ label, required, defaultValue }, ref) => {
        const textareaId = slugify(label);
        const errorId = `${textareaId}-error`;

        const [textareaState, setTextareaState] = useState({
            value: defaultValue || '',
            focused: false,
            error: false,
        });

        const handleFocus = useCallback(() => {
            setTextareaState((prev) => ({ ...prev, focused: true }));
        }, []);

        const handleBlur = useCallback(() => {
            setTextareaState((prev) => ({ ...prev, focused: false }));
        }, []);

        const handleChange = useCallback(
            (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const value = e.target.value;

                if (required) {
                    setTextareaState((prev) => ({
                        ...prev,
                        error: value === '',
                        value,
                    }));
                }
            },
            [required]
        );

        const labelStyle =
            textareaState.focused || textareaState.value !== ''
                ? {
                      left: '0px',
                      top: '0',
                      fontSize: '16px',
                  }
                : {
                      left: '8px',
                      top: '4px',
                      fontSize: '18px',
                  };
        const blockStyle = {
            paddingTop:
                textareaState.focused || textareaState.value !== ''
                    ? '1.5rem'
                    : '0',
        };

        return (
            <div>
                <div
                    className='relative transition-all duration-500'
                    style={blockStyle}
                >
                    <label
                        htmlFor={textareaId}
                        className='text-base absolute transition-all duration-500'
                        style={labelStyle}
                    >
                        {label} {required && ' *'}
                    </label>
                    <textarea
                        ref={ref}
                        id={textareaId}
                        required={required}
                        defaultValue={defaultValue}
                        className='w-full bg-transparent border border-white rounded py-1 px-2 text-lg font-medium focus-visible:outline-none'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        aria-invalid={textareaState.error}
                        aria-describedby={
                            textareaState.error ? errorId : undefined
                        }
                    />
                </div>
                {textareaState.error && (
                    <p
                        id={errorId}
                        className='text-red-500 pt-1'
                    >
                        Merci de compléter ce champ
                    </p>
                )}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';
export default TextArea;
