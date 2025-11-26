import { api, type IResponse } from '@/config';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import cookie from 'js-cookie';
import type { IAuthData } from '../login-type';

interface ILoginData {
  username: string;
  password: string;
  role: 'Admin' | 'Teacher';
}
export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: ILoginData) => {
      const response = await api.post('auth/signin', data, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log('Login successful:', data);
      const userRes: IResponse<IAuthData> = data;
      cookie.set('token', userRes.data.token);
      navigate('/app', { replace: true });
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });
};
