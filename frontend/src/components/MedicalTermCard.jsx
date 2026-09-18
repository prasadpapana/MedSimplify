import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MedicalTermCard({ term, meaning }) {
  const { t } = useTranslation();
  return <Card className="term-card"><CardHeader><Badge variant="secondary">{t('result.term')}</Badge><CardTitle>{term}</CardTitle></CardHeader><CardContent><p>{meaning}</p></CardContent></Card>;
}
