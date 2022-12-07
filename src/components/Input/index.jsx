import { Input as StyledInput } from './styles';

export default function Input({ inputValue, setInputValue }) {
    return (
        <StyledInput
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
    );
}
