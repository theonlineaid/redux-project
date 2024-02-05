import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

// All extra Css 
import "./index.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

// All Provider                 
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { router } from './route/route';
import CustomTheme from './theme';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CustomTheme>
          <RouterProvider router={router} />
        </CustomTheme>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
