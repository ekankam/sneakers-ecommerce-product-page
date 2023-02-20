'use client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/redux/store';
import LightBox from '@/components/LightBox';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="mx-auto mb-4 min-h-screen w-full min-w-[375px] max-w-[1440px] bg-custom-white text-16 font-normal">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Sidebar />
            <LightBox />
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
