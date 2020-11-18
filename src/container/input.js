import React from 'react';
import Input from '../components/input';
import { addTodo } from '../operations/mutations';

const InputContainer = () => <Input onSubmit={addTodo} />;

export default InputContainer;
