import { ReactNode } from "react";
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({children} : {children: ReactNode}){
    return (
        <html lang='ko'>
            <body>
                <NavBar/>
                {children}
            </body>
        </html>
    );
}