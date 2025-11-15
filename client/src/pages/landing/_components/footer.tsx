import { Button } from '@/components/ui/button'
import { Eos } from 'iconsax-reactjs';
import {  Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  product: [
    { label: 'Features', href: '/#' },
    { label: 'Security', href: '/#' },
    { label: 'API', href: '/#' },
  ],
  company: [
    { label: 'About Us', href: '/#' },
    { label: 'Careers', href: '/#' },
    { label: 'Contact', href: '/#' },
  ],
  resources: [
    { label: 'Help Center', href: '/#' },
    { label: 'Privacy Policy', href: '/#' },
    { label: 'Terms of Service', href: '/#' },
  ],
  socialMedia: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
}


const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <div className="bg-primary text-white h-6.5 w-6.5 rounded flex items-center justify-center">
        <Eos className="size-8" />
      </div>
      <span className="font-semibold text-lg text-primary">Cashlet</span>
    </Link>
  );
};

export default function Footer() {
  return (<footer className="bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="rounded-3xl  p-8 lg:p-12">
        <div className="mb-12 grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Logo />
            </div>
            <p className="mb-6 text-sm text-white/70">
              Smart financial management powered by AI. Take control of your finances with Cashlet's intelligent platform.
            </p>
            <div className="flex items-center gap-4">
              <Button
              size="icon"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
              size="icon"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
              size="icon"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Product</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Resources</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Cashlet. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  )
}
