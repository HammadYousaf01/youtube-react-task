import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "./Root";
import VideoSuggestions, { SingleVideo } from "./components/videos";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<VideoSuggestions />} />
        <Route path="videos">
          <Route index element={<VideoSuggestions />} />
          <Route path=":id" element={<SingleVideo />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
