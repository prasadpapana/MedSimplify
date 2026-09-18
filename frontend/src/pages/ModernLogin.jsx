import { useState } from 'react';
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import LoginHealthcare from '../components/illustrations/LoginHealthcare';

export default function ModernLogin() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);

    if (!form.email || !form.password) return setError(t('auth.required'));
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError(t('auth.emailError'));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 350);
  };

  return (
    <main className="min-h-screen bg-[#F3F8FD] lg:grid lg:grid-cols-[minmax(320px,0.9fr)_1.1fr]">
      <section className="relative hidden overflow-hidden bg-[#0B2A4A] px-10 py-12 text-slate-50 lg:flex lg:flex-col lg:justify-between xl:px-16">
        <div className="relative z-10 flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-md bg-slate-50 text-sm text-slate-950">M</span>
          MedSimplify
        </div>

        <div className="relative z-10 flex h-full items-center justify-center py-8">
          <LoginHealthcare className="w-full max-w-[420px] drop-shadow-[0_28px_38px_rgba(59,130,246,0.18)]" />
        </div>

        <div className="relative z-10 flex items-center gap-3 text-sm text-slate-300">
          <ShieldCheck className="text-sky-300" />
          {t('home.safety')}
        </div>

        <div className="absolute -right-24 top-1/3 size-72 rounded-full border border-slate-800" />
        <div className="absolute -bottom-40 -left-24 size-80 rounded-full border border-slate-800" />
      </section>

      <section className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-8">
        <Card className="w-full max-w-md border-0 bg-transparent shadow-none">
          <CardHeader className="px-0 pb-8">
            <Link className="mb-10 flex items-center gap-2 font-semibold tracking-tight lg:hidden" to="/">
              <span className="grid size-8 place-items-center rounded-md bg-primary text-sm text-primary-foreground">M</span>
              MedSimplify
            </Link>
            <CardTitle className="text-3xl tracking-tight">{t('auth.loginTitle')}</CardTitle>
            <CardDescription className="mt-2 text-base">{t('auth.loginDescription')}</CardDescription>
          </CardHeader>

          <CardContent className="px-0">
            <form className="flex flex-col gap-5" onSubmit={submit}>
              <div className="flex flex-col gap-2">
                <Label htmlFor="login-email">{t('auth.email')}</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    className="h-11 pl-10"
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="login-password">{t('auth.password')}</Label>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    className="h-11 pl-10 pr-11"
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(event) => setForm({ ...form, password: event.target.value })}
                    autoComplete="current-password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? t('auth.hide') : t('auth.show')}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert>
                  <AlertDescription>{t('auth.success')}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="h-11 w-full" disabled={loading}>
                {loading ? t('auth.loading') : t('auth.loginTitle')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Separator className="flex-1" />
                {t('auth.or')}
                <Separator className="flex-1" />
              </div>

              <Button type="button" variant="outline" className="h-11 w-full" asChild>
                <Link to="/signup">{t('auth.signupTitle')}</Link>
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
