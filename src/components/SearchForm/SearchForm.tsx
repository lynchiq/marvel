import React from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { StyledSearchForm } from './SearchForm.styles';
import useInput from '../../hooks/useInput';

type Props = {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
};

type FormData = {
  name: string;
};

const SearchForm = ({ onSubmit, isLoading }: Props) => {
  const required = (value: string) => value !== '';
  const minLength = (value: string) => value.length > 3;

  const heroNameInput = useInput('', [required, minLength]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (heroNameInput.isValid()) {
      onSubmit({ name: heroNameInput.value });
    }
  };

  return (
    <StyledSearchForm onSubmit={submitForm}>
      <Input
        placeholder="Type superhero name here"
        value={heroNameInput.value}
        onChange={heroNameInput.onChange}
        error={heroNameInput.error}
        disabled={isLoading}
      />
      <Button
        text="Search"
        disabled={heroNameInput.error}
        isLoading={isLoading}
      />
    </StyledSearchForm>
  );
};

export default SearchForm;
