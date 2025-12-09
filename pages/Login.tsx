import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../App';
import { User, Lock, Mail } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate('/');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-stone-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={24} />
          </div>
          <h2 className="text-2xl font-bold text-stone-800">Вход / Регистрация</h2>
          <p className="text-stone-500 mt-2">Войдите, чтобы сохранить результаты диагностики</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute top-3.5 left-4 text-stone-400" size={18} />
              <input
                type="email"
                id="email"
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1">
              Пароль
            </label>
            <div className="relative">
              <Lock className="absolute top-3.5 left-4 text-stone-400" size={18} />
              <input
                type="password"
                id="password"
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-stone-900 text-white py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors shadow-lg hover:shadow-stone-200"
          >
            Войти
          </button>
          
          <p className="text-xs text-stone-400 mt-4 text-center">
             Для доступа к админ-панели используйте email содержащий слово "admin" (например: admin@skinglow.com).
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;