
import "./globals.css";



export const metadata = {
  title: "Home | Blackbuildup",
  description: "CCLC homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`mx-auto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
