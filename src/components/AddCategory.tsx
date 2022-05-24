import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';

interface Props {
  handleAdd: (value: string) => void;
}

const AddCategory = ({ handleAdd }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim().length > 2) {
      handleAdd(inputValue);
      setInputValue('');
    }
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit();
  };

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSubmitKey = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleSubmitKey}
        placeholder="New category"
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddCategory;
