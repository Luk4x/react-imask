import { useState } from 'react';

import { Main } from './styles';
import Input from '../components/Input';
import Card from '../components/Card';

export default function App() {
    const [inputValue, setInputValue] = useState('');

    return (
        <Main>
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            <Card inputValue={inputValue} />
        </Main>
    );
}
