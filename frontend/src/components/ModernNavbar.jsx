import { useState } from 'react';
import { Globe, Menu, Stethoscope } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { languages } from '../i18n/config';
import i18n from '../i18n/config';

export default function ModernNavbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/analyze', label: t('nav.analyze') },
    { to: '/about', label: t('nav.about') }
  ];
  const selectedLanguage = languages.find((language) => language.code === i18n.language)?.label || 'English';

  const getLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 font-semibold tracking-tight text-slate-950" to="/" aria-label="MedSimplify home">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-sky-100 bg-sky-50 text-sky-700">
            <Stethoscope className="h-4 w-4" />
          </span>
          <span className="text-lg">MedSimplify</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={getLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 sm:flex">
          <Select value={i18n.language} onValueChange={(value) => i18n.changeLanguage(value)}>
            <SelectTrigger className="h-9 w-[150px] border-slate-200 bg-white text-slate-700" aria-label="Select language">
              <Globe className="mr-2 h-4 w-4 text-slate-500" />
              <SelectValue>{selectedLanguage}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.code} value={language.code}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button asChild size="sm" className="h-9 px-4">
            <Link to="/login">{t('nav.login')}</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto h-9 w-9 border-slate-200 bg-white md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-left text-xl text-slate-950">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-sky-100 bg-sky-50 text-sky-700">
                  <Stethoscope className="h-4 w-4" />
                </span>
                MedSimplify
              </SheetTitle>
              <SheetDescription>Clearer medical language for every report.</SheetDescription>
            </SheetHeader>

            <div className="mt-6 flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <Separator className="my-3" />

              <Select value={i18n.language} onValueChange={(value) => i18n.changeLanguage(value)}>
                <SelectTrigger className="w-full border-slate-200 bg-white text-slate-700" aria-label="Select language">
                  <Globe className="mr-2 h-4 w-4 text-slate-500" />
                  <SelectValue>{selectedLanguage}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language.code} value={language.code}>
                      {language.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button asChild className="mt-4 w-full">
                <Link to="/login" onClick={() => setOpen(false)}>
                  {t('nav.login')}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
