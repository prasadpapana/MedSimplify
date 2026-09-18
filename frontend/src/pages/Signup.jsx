import { useState } from 'react';
import { Check, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SignupHealthcare from '../components/illustrations/SignupHealthcare';

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

  const field = (id, label, Icon, type = 'text', placeholder = '') => (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-sm font-semibold text-[#102A43]">{label}</Label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
        <Input
          id={id}
          type={type}
          value={form[id]}
          placeholder={placeholder}
          onChange={(event) => setForm({ ...form, [id]: event.target.value })}
          autoComplete={id === 'password' || id === 'confirm' ? 'new-password' : id}
          className="h-11 rounded-xl border-[#D8E3EF] bg-[#F8FBFF] pl-10 pr-11 text-[#102A43] placeholder:text-[#94A3B8] focus-visible:ring-blue-200"
        />
        {(id === 'password' || id === 'confirm') && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 text-[#64748B] hover:bg-[#E8F2FF] hover:text-[#0B2A4A]"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? t('auth.hide') : t('auth.show')}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F4F8FC] lg:grid lg:grid-cols-[45%_55%]">
      <section className="relative hidden overflow-hidden bg-[#EAF3FB] px-10 py-12 lg:flex lg:flex-col lg:justify-between xl:px-16">
        <Link className="relative z-10 flex items-center gap-2 text-lg font-semibold tracking-tight text-[#0B2A4A]" to="/">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B2A4A] text-sm text-white">M</span>
          MedSimplify
        </Link>

        <div className="relative z-10 mx-auto flex w-full max-w-[500px] flex-col justify-center py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">Healthcare clarity</p>
          <h1 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#0B2A4A] xl:text-5xl">
            Understand Your Medical Reports in Simple Language
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-[#64748B]">
            Create your account and keep your simplified medical reports organized in one place.
          </p>
          <div className="mt-7 flex flex-col gap-3 text-sm font-medium text-[#0B2A4A]">
            {['Simple explanations', 'Multiple languages', 'Easy report access'].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#2563EB]"><Check className="h-3.5 w-3.5" /></span>{benefit}</div>
            ))}
          </div>
          <div className="mt-8 w-full max-w-[470px]"><SignupHealthcare className="w-full" /></div>
        </div>

        <p className="relative z-10 text-xs text-[#64748B]">Clearer language for better healthcare conversations.</p>
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full border border-white/70" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-[#BFDDF8]/70" />
      </section>

      <section className="flex min-h-screen items-center justify-center bg-white px-5 py-10 sm:px-8">
        <Card className="w-full max-w-[420px] border-0 bg-transparent shadow-none">
          <CardHeader className="px-0 pb-7">
            <Link className="mb-8 flex items-center gap-2 text-lg font-semibold tracking-tight text-[#0B2A4A] lg:hidden" to="/">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B2A4A] text-sm text-white">M</span>
              MedSimplify
            </Link>
            <CardTitle className="text-3xl font-semibold tracking-[-0.04em] text-[#0B2A4A]">Create your account</CardTitle>
            <CardDescription className="mt-2 text-base text-[#64748B]">Keep your report explanations in one place.</CardDescription>
          </CardHeader>

          <CardContent className="px-0">
            <form className="flex flex-col gap-4" onSubmit={submit}>
              {field('name', t('auth.name'), User, 'text', 'Enter your name')}
              {field('email', t('auth.email'), Mail, 'email', 'Enter your email')}
              {field('password', t('auth.password'), Lock, showPassword ? 'text' : 'password', 'Enter password')}
              {field('confirm', t('auth.confirm'), Lock, showPassword ? 'text' : 'password', 'Confirm password')}

              {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
              {success && <Alert><AlertDescription>{t('auth.success')}</AlertDescription></Alert>}

              <Button type="submit" size="lg" className="mt-2 h-12 w-full rounded-xl bg-[#0B2A4A] text-base font-semibold text-white transition-colors hover:bg-[#2563EB]">
                Create Account
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-[#64748B]">
              {t('auth.hasAccount')}{' '}
              <Link className="font-semibold text-[#0B2A4A] hover:text-[#2563EB]" to="/login">Log in</Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
