import { type ChangeEvent, useEffect, useMemo, useState } from 'react';

type ValidationRules<T> = {
  [K in keyof T]?: [(value: T[K]) => boolean, string];
};

export const useForm = <T extends Record<string, any>>(
  initialForm: T,
  formValidations: ValidationRules<T> = {}
) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [formValidation, setFormValidation] = useState<
    Record<string, string | null>
  >({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    return Object.values(formValidation).every((value) => value === null);
  }, [formValidation]);

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

  const createValidators = () => {
    const formCheckedValues: Record<string, string | null> = {};

    for (const formField of Object.keys(formValidations) as (keyof T)[]) {
      const [fn, errorMessage] = formValidations[formField]!;
      formCheckedValues[`${String(formField)}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
