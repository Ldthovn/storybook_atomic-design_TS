import React from "react";
import { Alert } from "../../atoms/Alert";
import { Form } from "../../molecules/Form";
import { Layout } from "../../templates/Layout/Layout";
import "./page.css";

export const Page: React.VFC = () => {
  const renderImage =
    "https://media.istockphoto.com/photos/stunning-image-from-a-safari-in-africa-picture-id1390535683";

  const renderBanner = (
    <div className="Content-wrapper">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a{" "}
        <a
          href="https://componentdriven.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>component-driven</strong>
        </a>{" "}
        process starting with atomic components and ending with pages.
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose
          such data from the "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock
          these services out using Storybook.
        </li>
      </ul>
    </div>
  );

  const renderContact = (
    <>
      <h2 className="Contact-title mb-10 text-3xl font-black">
        Contact Section
      </h2>
      <Form />
    </>
  );
  return (
    <>
      <Layout
        srcImg={renderImage}
        children={renderBanner}
        contentContact={renderContact}
      />
      <div className="alert">
        <Alert type="info" message="Đăng ký thành công!" />
      </div>
    </>
  );
};
