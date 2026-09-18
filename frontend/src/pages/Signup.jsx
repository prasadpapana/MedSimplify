import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Signup() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const submit = (event) => {
    event.preventDefault(); setError(''); setSuccess(false);
    if (Object.values(form).some((value) => !value)) return setError(t('auth.required'));
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError(t('auth.emailError'));
    if (form.password.length < 6) return setError(t('auth.passwordError'));
    if (form.password !== form.confirm) return setError(t('auth.matchError'));
    setSuccess(true);
  };
  const field = (id, label, Icon, type = 'text') => <div className="auth-field"><Label htmlFor={id}>{label}</Label><div className="input-icon-wrap"><Icon /><Input id={id} type={type} value={form[id]} onChange={(event) => setForm({ ...form, [id]: event.target.value })} autoComplete={id === 'password' || id === 'confirm' ? 'new-password' : id} /></div></div>;
  return <main className="auth-page"><Card className="auth-card"><CardHeader className="auth-header"><Link className="brand auth-brand" to="/"><span className="brand-mark">M</span><span>MedSimplify</span></Link><CardTitle>{t('auth.signupTitle')}</CardTitle><CardDescription>{t('auth.signupDescription')}</CardDescription></CardHeader><CardContent><form className="auth-form" onSubmit={submit}>{field('name', t('auth.name'), UserRound)}{field('email', t('auth.email'), Mail)}{field('password', t('auth.password'), LockKeyhole, showPassword ? 'text' : 'password')}{field('confirm', t('auth.confirm'), LockKeyhole, showPassword ? 'text' : 'password')}<Button type="button" variant="ghost" size="sm" className="show-password" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff /> : <Eye />} {showPassword ? t('auth.hide') : t('auth.show')}</Button>{error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}{success && <Alert><AlertDescription>{t('auth.success')}</AlertDescription></Alert>}<Button type="submit" size="lg" className="auth-submit">{t('auth.signup')}</Button></form></CardContent><CardFooter className="auth-footer"><Separator /><p>{t('auth.hasAccount')} <Link to="/login">{t('nav.login')}</Link></p></CardFooter></Card></main>;
}
