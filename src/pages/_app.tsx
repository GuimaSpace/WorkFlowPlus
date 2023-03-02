import '../styles/Window.css'; 
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRef, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
