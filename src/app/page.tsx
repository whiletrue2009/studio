'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function Home() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setLoginError('');

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoggingIn(false);
    setLoginError('网站建设中，暂未开放登录');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="sm:max-w-md w-full">
        <div className="flex justify-center mb-8">
          <Image
            src="https://www.jshtcm.com/Uploads/Picture/2024/09/04/s66d80f7d8214e.png"
            alt="江苏省中医院泌尿外科 Logo"
            width={150}
            height={150}
            className="rounded-full shadow-md"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center text-foreground mb-4">
          江苏省中医院泌尿外科登录
        </h1>
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="用户名" className="shadow-sm" />
          <Input type="password" placeholder="密码" className="shadow-sm" />
          <Button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="bg-primary text-primary-foreground hover:bg-primary/80 shadow-md"
          >
            {isLoggingIn ? '登录中...' : '登录'}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <Button variant="secondary" className="shadow-sm" onClick={handleLogin}>
            <Phone className="mr-2 h-4 w-4" />
            手机号快捷登录
          </Button>
        </div>

        {loginError && (
          <div className="mt-4 text-center text-red-500">{loginError}</div>
        )}
      </div>
    </div>
  );
}

