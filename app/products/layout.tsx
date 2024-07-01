import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PC Builder | Products",
};

interface LayoutProps {
  children: React.ReactNode;
}

const ProductsLayout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default ProductsLayout;
