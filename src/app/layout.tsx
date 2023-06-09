import './globals.css';

export const metadata = {
  title: 'visualml',
  description: 'visualml',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      data-theme="cupcake"
    >
      <body>{children}</body>
    </html>
  );
}
