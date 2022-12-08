import { useRef, useEffect } from 'react';

import IMask from 'imask';

import { Input as StyledInput } from './styles';

export default function Input({ inputValue, setInputValue }) {
    const inputRef = useRef(null);
    const masterCardRegex = /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/;

    useEffect(() => {
        IMask(inputRef.current, {
            mask: '0000 0000 0000 0000',
            regex: masterCardRegex
        });
    }, []);

    function handleChange(e) {
        setInputValue(e.target.value);

        if (inputValue.length === 18) {
            inputRef.current.style.borderColor = inputValue.match(masterCardRegex)
                ? '#157812'
                : '#741313';
        } else inputRef.current.style.borderColor = '#444';
    }

    return (
        <StyledInput
            placeholder="Card Number"
            value={inputValue}
            onChange={e => handleChange(e)}
            ref={inputRef}
        />
    );
}

/*
https://github.com/Luk4x/gencard/blob/main/src/main.js
https://imask.js.org/guide.html

https://www.npmjs.com/package/react-imask
https://www.freakyjolly.com/react-add-pattern-mask-using-imask-js-number-email-phone-date-tutorial-by-examples/
*/
