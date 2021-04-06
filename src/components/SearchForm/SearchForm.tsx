import React, { useState } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { StyledSearchForm } from './SearchForm.styles';

type Props = {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
};

type FormData = {
  name: string;
};

const SearchForm = ({ onSubmit, isLoading }: Props) => {
  const [name, setName] = useState('');
  const [formError, setFormError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFormError(false);
    setName(newValue);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name !== '') {
      onSubmit({ name });
    } else {
      alert('Name is required');
      setFormError(true);
    }
  };

  return (
    <StyledSearchForm onSubmit={submitForm}>
      <Input
        placeholder="Type superhero name here"
        value={name}
        onChange={handleInputChange}
        error={formError}
        disabled={isLoading}
      />
      <Button
        text="Search"
        disabled={formError}
        isLoading={isLoading}
      />
    </StyledSearchForm>
  );
};

export default SearchForm;
