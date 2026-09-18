import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Login() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const submit = (event) => {
    event.preventDefault(); setError(''); setSuccess(false);
    if (!form.email || !form.password) return setError(t('auth.required'));
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError(t('auth.emailError'));
    setSuccess(true);
  };
  return <main className="auth-page"><Card className="auth-card"><CardHeader className="auth-header"><Link className="brand auth-brand" to="/"><span className="brand-mark">M</span><span>MedSimplify</span></Link><CardTitle>{t('auth.loginTitle')}</CardTitle><CardDescription>{t('auth.loginDescription')}</CardDescription></CardHeader><CardContent><form className="auth-form" onSubmit={submit}><div className="auth-field"><Label htmlFor="login-email">{t('auth.email')}</Label><div className="input-icon-wrap"><Mail /><Input id="login-email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} autoComplete="email" /></div></div><div className="auth-field"><Label htmlFor="login-password">{t('auth.password')}</Label><div className="input-icon-wrap"><LockKeyhole /><Input id="login-password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} autoComplete="current-password" /><Button type="button" variant="ghost" size="icon" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? t('auth.hide') : t('auth.show')}>{showPassword ? <EyeOff /> : <Eye />}</Button></div></div>{error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}{success && <Alert><AlertDescription>{t('auth.success')}</AlertDescription></Alert>}<Button type="submit" size="lg" className="auth-submit">{t('auth.login')}</Button></form></CardContent><CardFooter className="auth-footer"><Separator /><p>{t('auth.noAccount')} <Link to="/signup">{t('nav.signup')}</Link></p></CardFooter></Card></main>;
}
