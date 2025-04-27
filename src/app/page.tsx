'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setLoginError('');

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoggingIn(false);
    setLoginError('网站建设中，暂未开放登录');
  };

  const handleMobileLogin = () => {
    setIsLoggingIn(true);
    setLoginError('');

    // Simulate login delay
    setTimeout(() => {
      setIsLoggingIn(false);
      setLoginError('手机号登录建设中，敬请期待');
    }, 1000);
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen p-4"
      style={{
        backgroundImage: `url(https://www.jshtcm.com/Uploads/Picture/2024/09/04/s66d80c521f5ae.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      <div className="flex justify-start mt-8 w-full">
        <Image
          src="https://www.jshtcm.com/Uploads/Picture/2024/09/04/s66d80f7d8214e.png"
          alt="江苏省中医院泌尿外科 Logo"
          width={200}
          height={80}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="sm:max-w-md w-full mt-8">
        <h1 className="text-2xl font-semibold text-center text-foreground mb-4">
          江苏省中医院泌尿外科欢迎您
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center">用户登录</h2>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full" onClick={handleLogin} disabled={isLoggingIn}>
            {isLoggingIn ? '登录中...' : '登录'}
          </Button>
          {loginError && <p className="text-red-500 mt-4 text-center">{loginError}</p>}
          <div className="mt-6 text-center">
            <Button variant="secondary" onClick={handleMobileLogin} disabled={isLoggingIn}>
              <Phone className="mr-2 h-4 w-4" />
              手机号快捷登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
