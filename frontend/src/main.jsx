import { lazy, StrictMode } from 'react';
import { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu";
import CartList from "./Components/CartList";
import ShimmerLoader from "./Components/ShimmerLoader";
import SearchCityContextProvider from "./utils/context/SearchCityContextProvider";
import appStore from "./utils/redux/appStore";
import { Auth0Provider } from '@auth0/auth0-react';
import Profile from './Components/Profile.jsx';

// Lazy loading Grocery component
const Grocery = lazy(() => import("./Components/Grocery"));

// Create routes
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<CartList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
      <Route path="/grocery" element={
        <Suspense fallback={<ShimmerLoader />}>
          <Grocery />
        </Suspense>
      }/>
    </Route>
  )
);

// Create root and render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <SearchCityContextProvider>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <RouterProvider router={appRouter} />
        </Auth0Provider>
      </SearchCityContextProvider>
    </Provider>
  </StrictMode>,
);
