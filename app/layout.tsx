import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ul>
          <li className={styles.test}>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/calculator'>Calculator</Link>
          </li>
          <li>
            <Link href='/cari'>Cari User</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
