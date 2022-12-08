import { useRef } from 'react';
import { IMaskMixin } from 'react-imask';

import { Input as StyledInput } from './styles';

export default function Input({ inputValue, setInputValue }) {
    const inputRef = useRef(null);

    const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => (
        <StyledInput {...props} ref={inputRef} />
    ));

    // const inputMask = IMask(inputRef, {
    //     mask: '0000 0000 0000 0000',
    //     regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/
    // });

    return (
        <MaskedStyledInput
            placeholder="Card Number"
            defaultValue={inputValue}
            inputRef={inputRef}
            mask={/[0-9]/g}
            onAccept={(value, mask) => {
                setInputValue(value);
                console.log(mask);
                // inputRef.current.style.borderColor = '#1c921e';
            }}
        />
    );
}
