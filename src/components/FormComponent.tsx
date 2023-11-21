import React from 'react';
import { useForm } from 'react-hook-form';
import { centered } from '../utils/styles/constants';

interface IFormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

interface IFormData {
  email: string;
  password: string;
}

const FormComponent = ({ title, handleClick }: IFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    handleClick(data.email, data.password);
  };

  const container: React.CSSProperties = {
    ...centered,
    flexDirection: 'column',
  };

  return (
    <form style={container} onSubmit={handleSubmit(onSubmit)}>
      <input
        style={{ marginBottom: 10 }}
        type="text"
        placeholder="Email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <input
        style={{ marginBottom: 10 }}
        type="password"
        placeholder="Password"
        {...register('password', { required: 'Password is required' })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <button style={{ marginBottom: 10 }} type="submit">
        {title}
      </button>
    </form>
  );
};

export default FormComponent;