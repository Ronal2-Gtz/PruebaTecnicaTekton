import { type ChangeEvent, useEffect, useState } from 'react';

export const useForm = <T extends Record<string, any>>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const onInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
