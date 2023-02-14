'use client';
import Sidebar from '@/components/Sidebar';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-auto min-h-screen w-full min-w-[375px] max-w-[1440px] bg-custom-white text-16 font-normal">
        <Provider store={store}>
          <Sidebar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
