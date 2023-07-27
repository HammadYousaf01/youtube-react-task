import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "./Root";
import { SearchResult, SuggestionsPage, VideoPage } from "src/components";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<SuggestionsPage />} />
        <Route path="videos">
          <Route index element={<SuggestionsPage />} />
          <Route path=":id" element={<VideoPage />} />
        </Route>
        <Route path="search/:query" element={<SearchResult />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
