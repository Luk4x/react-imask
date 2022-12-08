import { Card as StyledCard } from './styles';

export default function Card({ inputValue }) {
    return (
        <StyledCard>
            {inputValue ? inputValue : '#### #### #### ####'}
        </StyledCard>
    );
}
