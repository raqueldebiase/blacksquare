// src/app/api/auth/authenticate/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface User {
  id: string;
  email: string;
  password: string;
}

const mockUser: User = {
  id: '1',
  email: 'test@example.com',
  password: 'password',
};

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (email === mockUser.email && password === mockUser.password) {
      return NextResponse.json(mockUser);
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
