import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { TikTok_Sans } from "next/font/google"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center gap-8 py-10 md:py-12 md:flex-row md:justify-between px-4">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <MapPin className="h-4 w-4" />
              <span>Cordova, Cebu, Philippines</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Phone className="h-4 w-4" />
              <span>+639 94770 3569</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Mail className="h-4 w-4" />
              <a href="mailto:eych.xander@gmail.com" className="hover:text-primary transition-colors">
                eych.xander@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Accounts */}
        <div className="flex flex-col gap-4 text-center md:text-right">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/letter.eych"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
             <Link
              href="https://www.instagram.com/letter.eych/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.instagram.com/letter.eych/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Eych Gadget. All rights reserved.</p>
      </div>
    </footer>
  )
}
