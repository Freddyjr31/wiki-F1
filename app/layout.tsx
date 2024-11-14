import Footer from './ui/footer';
import './ui/global.css';
import NavBarComponent from './ui/navbar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>wiki-f1</title>
      </head>
      <body className='bg-neutral-950 pt-5'>

        {/* HEADER */}
        <NavBarComponent />

        {/* layaouts y pages de la pagina */}
        {children}

        {/* FOOTER */}
        <Footer/>
      </body>
    </html>
  );
}
