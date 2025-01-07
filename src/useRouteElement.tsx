import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./layouts/main-layout/MainLayout";
import AboutPage from "./pages/About";
import TermAndConditionPage from "./pages/TermAndCondition";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import WhiteScreenPage from "./pages/White-screen";
import BlueScreenPage from "./pages/Blue-screen";
import GreenScreenPage from "./pages/Green-screen";
import RedScreenPage from "./pages/Red-screen";
import YellowScreenPage from "./pages/Yellow-screen";
import OrangeScreenPage from "./pages/Orange-screen";
import PinkScreenPage from "./pages/Pink-screen";
import PurpleScreenPage from "./pages/Purple-screen";

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: "/",
      index: true,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <MainLayout>
          <AboutPage />
        </MainLayout>
      ),
    },
    {
      path: "/privacy-policy",
      element: (
        <MainLayout>
          <PrivacyPolicyPage />
        </MainLayout>
      ),
    },
    {
      path: "/term-and-condition",
      element: (
        <MainLayout>
          <TermAndConditionPage />
        </MainLayout>
      ),
    },
    {
      path: "/white-screen",
      element: (
        <MainLayout>
          <WhiteScreenPage />
        </MainLayout>
      ),
    },
    {
      path: "/blue-screen",
      element: (
        <MainLayout>
          <BlueScreenPage />
        </MainLayout>
      ),
    },
    {
      path: "/green-screen",
      element: (
        <MainLayout>
          <GreenScreenPage />
        </MainLayout>
      ),
    },
    {
      path: "/red-screen",
      element: (
        <MainLayout>
          <RedScreenPage />
        </MainLayout>
      ),
    },
    {
      path: "/yellow-screen",
      element: (
        <MainLayout>
          <YellowScreenPage />
        </MainLayout>
      ),
    },
    {
      path: "/orange-screen",
      element: (
        <MainLayout>
          <OrangeScreenPage />
        </MainLayout>
      ),
    },
    {
      path: "/pink-screen",
      element: (
        <MainLayout>
          <PinkScreenPage />
        </MainLayout>
      ),
    },
    {
      path: "/purple-screen",
      element: (
        <MainLayout>
          <PurpleScreenPage />
        </MainLayout>
      ),
    },
  ]);
  return routeElements;
}
