import React from "react";
import { Layout, theme } from "antd";
const { Header } = Layout;

const TopHeader = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <ResHeader />
      style=
      {{
        padding: 0,
        background: colorBgContainer,
      }}
      />
    </>
  );
};

export default TopHeader;
