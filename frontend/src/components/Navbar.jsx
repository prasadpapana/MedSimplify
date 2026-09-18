import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { languages } from '../i18n/config';
import i18n from '../i18n/config';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand" to="/" aria-label="MedSimplify home">
          <span className="brand-mark">M</span>
          <span>MedSimplify</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/">{t('nav.home')}</NavLink>
          <NavLink to="/analyze">{t('nav.analyze')}</NavLink>
          <a href="/#how-it-works">How It Works</a>
          <NavLink to="/about">{t('nav.about')}</NavLink>
        </nav>
        <Select value={i18n.language} onValueChange={(value) => i18n.changeLanguage(value)}>
          <SelectTrigger className="language-trigger" aria-label="Select language"><Languages data-icon="inline-start" /><SelectValue /></SelectTrigger>
          <SelectContent>{languages.map((language) => <SelectItem key={language.code} value={language.code}>{language.label}</SelectItem>)}</SelectContent>
        </Select>
        <Button render={<Link to="/login" />} size="sm">{t('nav.login')}</Button>
      </div>
    </header>
  );
}
