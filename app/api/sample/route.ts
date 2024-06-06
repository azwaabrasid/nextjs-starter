import { NextResponse } from 'next/server';

export const GET = async (_req: Request) => {
  try {
    return NextResponse.json('Hello World!');
  } catch (err) {
    console.error(err);
    return new NextResponse(undefined, { status: 500 });
  }
};
