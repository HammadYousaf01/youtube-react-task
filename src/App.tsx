import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "./Root";
import { SearchResult, VideosList, SingleVideo } from "./components";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<VideosList />} />
        <Route path="videos">
          <Route index element={<VideosList />} />
          <Route path=":id" element={<SingleVideo />} />
        </Route>
        <Route path="search/:query" element={<SearchResult />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
