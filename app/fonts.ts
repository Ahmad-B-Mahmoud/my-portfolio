import { Poppins, Noto_Kufi_Arabic } from 'next/font/google'
 
export const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: 'swap',
})
 
export const noto_kufi_arabic = Noto_Kufi_Arabic({
    weight: ["400", "700", "900"],
    subsets: ["arabic"],
    display: 'swap',
})