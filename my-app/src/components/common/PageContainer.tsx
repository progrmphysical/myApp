interface Props {
  children: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px 24px",
        minHeight: "calc(100vh - 152px)",
      }}
    >
      {children}
    </main>
  );
}