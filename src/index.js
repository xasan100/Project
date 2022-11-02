import React from 'react';
import ReactDOM from 'react-dom/client';
import RootContext from './context';
import './index.css';
import Root from './root';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import { QueryClient, QueryClientProvider, } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
// const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <RootContext>
        <Root />
      </RootContext>
      </QueryClientProvider >
  </React.StrictMode>
);
