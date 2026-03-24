/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("@/shared/components/Layout"));
const Home = lazy(() => import("@/features/home/view/Home"));
const Operation = lazy(() => import("@/features/operation/view/Operation"));
const Nursing = lazy(() => import("@/features/nursing/view/Nursing"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={null}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/operation",
        element: (
          <Suspense fallback={null}>
            <Operation />
          </Suspense>
        ),
      },
      {
        path: "/nursing",
        element: (
          <Suspense fallback={null}>
            <Nursing />
          </Suspense>
        ),
      },
    ],
  },
]);
