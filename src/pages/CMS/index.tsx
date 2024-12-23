import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const CMSPage = () => {
  const location = useLocation();
  const canonicalUrl = `http://localhost:5173${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>CMS</title>
        <meta
          name="about"
          content="Đây là trang cms của ứng dụng Screen Space App. Tìm hiểu thêm thông tin tại đây!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <h1>CMS Page</h1>
    </>
  );
};

export default CMSPage;
