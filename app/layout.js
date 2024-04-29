import './globals.css'

export const metadata = {
  title: 'NextJS Course',
  description: 'Taught by Max Schwarzmuller',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
