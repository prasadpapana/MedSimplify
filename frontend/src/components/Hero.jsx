import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-dot" /> {t('home.eyebrow')}</p>
          <h1>{t('home.title')}</h1>
          <p className="hero-description">{t('home.description')}</p>
          <div className="hero-actions">
            <Button render={<Link to="/analyze" />} size="lg">{t('home.analyze')} <ArrowUpRight data-icon="inline-end" /></Button>
            <Button render={<a href="#how-it-works" />} variant="link">{t('home.how')}</Button>
          </div>
          <div className="trust-row"><span>✓</span> No reports stored <span>✓</span> Plain-English explanations</div>
        </div>
        <div className="hero-visual reveal delay-one" aria-label="Illustration of a simplified medical report">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="report-sheet">
            <div className="sheet-top"><span className="sheet-icon">+</span><span>REPORT SUMMARY</span><span className="sheet-status">READY</span></div>
            <div className="sheet-title">Abdominal ultrasound</div>
            <div className="sheet-line wide" /><div className="sheet-line medium" />
            <div className="sheet-highlight"><span className="pulse-dot" /><div><strong>Simple explanation</strong><p>The liver is slightly enlarged.</p></div></div>
            <div className="sheet-line medium" /><div className="sheet-line short" />
            <div className="sheet-footer"><span>3 terms explained</span><span>MedSimplify</span></div>
          </div>
          <div className="floating-tag tag-top"><span>✦</span> Clearer words</div>
          <div className="floating-tag tag-bottom"><span>✓</span> Private by design</div>
        </div>
      </div>
    </section>
  );
}
