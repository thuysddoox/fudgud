import { useEffect, useState } from 'react';

export interface Data {
  phone: string;
  name: string;
  email: string;
  message: string;
}
const useForm = (validate: Function, callback: Function) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [values, setValues] = useState<Data>({
    phone: '',
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Data>({
    phone: '',
    name: '',
    email: '',
    message: '',
  });
  useEffect(() => {
    if (Object.keys(errors).length === 0) callback(values);
  }, [errors]);

  useEffect(() => {
    if (isSubmitting) setErrors(validate(values));
  }, [values]);

  const handleChange = (event: any) => {
    event.persist();
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  return {
    values,
    errors,
    handleSubmit,
    handleChange,
  };
};

export default useForm;
