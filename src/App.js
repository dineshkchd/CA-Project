import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Loading from "./components/Loader";
import { Analytics } from "@vercel/analytics/react"; // Import Analytics component
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./App.css";

const AppRouter = lazy(() => import("./routes"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Set isLoading to false after 5 seconds
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);

  //   // Clean up the timeout to prevent memory leaks
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Suspense fallback={<div> <Loading /></div>}>
          <AppRouter />
          <Analytics />
          <SpeedInsights />
        </Suspense>

        {/* <Suspense fallback={<Loading />}>
         
          <AppRouter />

         
        </Suspense> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
