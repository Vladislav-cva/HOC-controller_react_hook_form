import React from "react";
import { PageWrapperHeader } from "./PageWrapperHeader/PageWrapperHeader";
import css from "./styles.module.css";

export const PageContainer = ({
  children,
  renderHeader,
  renderBackTo,
}: any) => {
  return (
    <>
      <PageWrapperHeader
        renderHeader={renderHeader}
        renderBackTo={renderBackTo}
      />
      <div className={css.container} style={{ background: "white" }}>
        {children}
      </div>
    </>
  );
};
