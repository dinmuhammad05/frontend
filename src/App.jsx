import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required("Nomi bosh bo'lmasin"),
    email: yup
      .string()
      .email('Email xato')
      .matches(
        /^[\w.-]+@(gmail|hotmail)\.com$/,
        'Faqat Gmail yoki Hotmail email qabul qilinadi',
      )
      .required("Email bosh bo'lmasin"),
  })
  .required();

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen bg-linear-to-r from-white to-blue-600 flex gap-[200px] items-center justify-center">
      <div className="w-[500px]">
        <h1 className="text-7xl font-extrabold text-blue-600 font-serif">
          Facebook
        </h1>
        <h2 className="text-2xl">
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>
      <div className="p-4 w-[400px] bg-white rounded-lg shadow-lg font-serif">
        <h2 className="text-2xl uppercase font-bold text-center">Login</h2>
        <div>
          <div className="mt-4">
            <label className="flex flex-col gap-2" htmlFor="id-name">
              <span className="font-medium">Name</span>
              <input
                id="id-name"
                type="text"
                className={`border indent-4 w-full h-10 ${
                  errors?.name
                    ? 'border-red-500 focus:outline-red-500'
                    : 'focus:outline-blue-500 focus:outline-2 border border-blue-500 '
                } rounded-lg`}
                placeholder="Enter your name"
                {...register('name')}
              />
            </label>
            {errors?.name && (
              <p className="text-red-500">{errors?.name?.message}</p>
            )}
          </div>

          <div className="mt-7">
            <label className="flex flex-col gap-2" htmlFor="id-email">
              <span className="font-medium">Email</span>
              <input
                id="id-email"
                type="text"
                className={`border focus:border-0 indent-4 w-full h-10 ${
                  errors?.email
                    ? 'border-red-500 focus:outline-red-500'
                    : 'focus:outline-blue-500 focus:outline-2 border border-blue-500 '
                } rounded-lg`}
                placeholder="Enter your email"
                {...register('email')}
              />
            </label>
            {errors?.email && (
              <p className="text-red-500">{errors?.email?.message}</p>
            )}
          </div>

          {/* Aylanadigan borderli button */}
          <div className="relative mt-7 w-full h-12 rounded-lg overflow-hidden p-1">
            {/* Aylanadigan gradient layer */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)',
                animation: 'spin 8s linear infinite',
              }}
            />
            {/* Button */}
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="relative w-full h-full  bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors z-10"
            >
              Login
            </button>
          </div>

          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default App;
