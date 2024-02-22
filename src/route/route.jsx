import { createBrowserRouter } from "react-router-dom";

// All Page
import App from "../App";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import PaymentSuccess from "../pages/PaymentSuccess";
import Test from "../compoments/Test";
import Page from "../pages/paginaation/Page";
import ErrorPage from "../pages/ErrorPage";
import ProductDetailsWayTwo from "../pages/ProductDetailsWayTwo";
import SearchResult from "../compoments/search/SearchResult";

// Route
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/pagination",
    element: <Page />,
  },
  {
    path: "/payment",
    element: <PaymentSuccess />,
  },
  {
    path: "/input",
    element: <Test />,
  },
  {
    path: "/tushy/:productId",
    element: <ProductDetailsWayTwo />,
  },
  {
    path: "/search",
    element: <SearchResult />,
  },
]);
