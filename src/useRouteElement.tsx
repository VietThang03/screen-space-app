import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./layouts/main-layout/MainLayout";
import AboutPage from "./pages/About";
import TermAndConditionPage from "./pages/TermAndCondition";
import CMSPage from "./pages/CMS";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import LoginPage from "./pages/Login";

export default function useRouteElement() {
    const routeElements = useRoutes([
        {
            path: '/',
            index: true,
            element:(
                <MainLayout>
                     <HomePage />
                </MainLayout>
            )
        },
        {
            path: '/about',
            element:(
                <MainLayout>
                     <AboutPage />
                </MainLayout>
            )
        },
        {
            path: '/privacy-policy',
            element:(
                <MainLayout>
                     <PrivacyPolicyPage />
                </MainLayout>
            )
        },
        {
            path: '/term-and-condition',
            element:(
                <MainLayout>
                     <TermAndConditionPage />
                </MainLayout>
            )
        },
        {
            path: '/cms',
            element:(
                <MainLayout>
                     <CMSPage />
                </MainLayout>
            )
        },
        {
            path: '/login',
            element:(
                <MainLayout>
                     <LoginPage />
                </MainLayout>
            )
        }
    ])
    return routeElements
}