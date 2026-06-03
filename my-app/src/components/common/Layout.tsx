import Header from "./Header";
import Footer from "./Footer";
import PageContainer from "./PageContainer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <PageContainer>
        {children}
      </PageContainer>

      <Footer />
    </>
  );
}