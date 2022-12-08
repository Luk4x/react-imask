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

    return (
        <StyledInput
            placeholder="Card Number"
            value={inputValue}
            onChange={e => {
                setInputValue(e.target.value);

                if (inputValue.length === 18) {
                    inputRef.current.style.borderColor = inputValue.match(masterCardRegex)
                        ? '#157812'
                        : '#741313';
                } else inputRef.current.style.borderColor = '#444';
            }}
            ref={inputRef}
        />
    );
}

// import { useRef } from 'react';

// import { IMaskMixin } from 'react-imask';

// import { Input as StyledInput } from './styles';

// export default function Input({ inputValue, setInputValue }) {
//     const inputRef = useRef(null);

//     const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => (
//         <StyledInput {...props} ref={inputRef} />
//     ));

//     return (
//         <MaskedStyledInput
//             placeholder="Card Number"
//             defaultValue={inputValue}
//             inputRef={inputRef}
//             radix="."
//             mask={/[0-8]/g}
//             onAccept={(value, mask) => {
//                 setInputValue(value);
//                 console.log(mask);
//             }}
//         />
//     );
// }

// const inputMask = IMask(inputRef, {
//     mask: '0000 0000 0000 0000',
//     regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/
// });
