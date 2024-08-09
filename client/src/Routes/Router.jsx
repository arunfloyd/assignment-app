import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "../components/project/Project";
import Upload from "../components/upload/Upload";
import ProjectSection from "../components/sidebar/ProjectSection";
import Configuration from "../components/sidebar/Configuration";
import Deployment from "../components/sidebar/Deployment";
import Pricing from "../components/sidebar/Pricing";
import Setting from "../components/sidebar/Setting";
import UploadSidebar from "../components/upload/UploadSidebar";
import EditTranscript from "../components/transcript/EditTranscript";
import UserConfig from "../components/userConfig/UserConfig";
import PrivateRoute from "./PrivateRoutes";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <UserConfig />,
  },
  {
    path: "/project",
    element: (
      <PrivateRoute>
        <Project />
      </PrivateRoute>
    ),
  },
  {
    path: "/upload/:projectName/*",
    element: (
      <PrivateRoute>
        <Upload />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <UploadSidebar />,
      },
      {
        path: "project-section",
        element: <ProjectSection />,
      },
      {
        path: "configurations",
        element: <Configuration />,
      },
      {
        path: "deployment",
        element: <Deployment />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "edit-transcript",
        element: <EditTranscript />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={appRouter} />;
}

export default Router;
