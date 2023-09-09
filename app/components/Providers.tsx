'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = (props: ProvidersProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
