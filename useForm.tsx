import { ChangeEvent, useState } from 'react';

interface Values {
  name: string;
  email: string;
  password: string;
}

const initialValues: Values = {
  name: '',
  email: '',
  password: '',
};

export const useForm = (initialForm: Values) => {
  const [formState, setFormState] = useState<Values>(initialForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(
      initialValues);
  };

  return {
    ...formState,
    formState,
    handleChange,
    onResetForm,
  };
};
