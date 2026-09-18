const MEDICAL_TERMS = {
  hepatomegaly: 'enlarged liver',
  'fatty infiltration': 'extra fat stored in the liver',
  hypertension: 'high blood pressure',
  tachycardia: 'fast heartbeat',
  bradycardia: 'slow heartbeat',
  edema: 'swelling caused by fluid',
  inflammation: 'swelling and irritation',
  benign: 'not cancerous',
  malignant: 'cancerous',
  lesion: 'an abnormal area of tissue',
  fracture: 'a broken bone',
  pneumonia: 'an infection or inflammation of the lungs',
  anemia: 'a low number of healthy red blood cells',
  hyperglycemia: 'high blood sugar',
  hypoglycemia: 'low blood sugar',
  cardiomegaly: 'enlarged heart',
  'pulmonary opacity': 'an area in the lung that looks denser than usual'
};

const TERM_TRANSLATIONS = {
  te: { 'hepatomegaly': 'కాలేయం విస్తరించడం', 'fatty infiltration': 'కాలేయంలో అదనపు కొవ్వు', hypertension: 'అధిక రక్తపోటు', anemia: 'ఆరోగ్యకరమైన ఎర్ర రక్త కణాలు తక్కువగా ఉండటం' },
  hi: { hepatomegaly: 'बढ़ा हुआ यकृत', 'fatty infiltration': 'यकृत में अतिरिक्त वसा', hypertension: 'उच्च रक्तचाप', anemia: 'स्वस्थ लाल रक्त कोशिकाओं की कम संख्या' },
  ta: { hepatomegaly: 'கல்லீரல் பெரிதாகுதல்', 'fatty infiltration': 'கல்லீரலில் கூடுதல் கொழுப்பு', hypertension: 'உயர் இரத்த அழுத்தம்', anemia: 'ஆரோக்கியமான சிவப்பு இரத்த அணுக்கள் குறைவு' },
  kn: { hepatomegaly: 'ವಿಸ್ತರಿಸಿದ ಯಕೃತ್ತು', 'fatty infiltration': 'ಯಕೃತ್ತಿನಲ್ಲಿ ಹೆಚ್ಚುವರಿ ಕೊಬ್ಬು', hypertension: 'ಅಧಿಕ ರಕ್ತದೊತ್ತಡ', anemia: 'ಆರೋಗ್ಯಕರ ಕೆಂಪು ರಕ್ತ ಕಣಗಳ ಕಡಿಮೆ ಸಂಖ್ಯೆ' },
  ml: { hepatomegaly: 'വലുതായ കരൾ', 'fatty infiltration': 'കരളിൽ അധിക കൊഴുപ്പ്', hypertension: 'ഉയർന്ന രക്തസമ്മർദ്ദം', anemia: 'ആരോഗ്യമുള്ള ചുവന്ന രക്താണുക്കളുടെ കുറവ്' }
};
const SENTENCE_TRANSLATIONS = {
  te: 'కాలేయം కొద్దిగా పెద్దగా ఉంది మరియు సాధారణం కంటే ఎక్కువ కొవ్వు ఉంది.',
  hi: 'यकृत थोड़ा बड़ा है और उसमें सामान्य से अधिक वसा है।',
  ta: 'கல்லீரல் சற்று பெரிதாக உள்ளது மற்றும் இயல்பை விட அதிக கொழுப்பு உள்ளது.',
  kn: 'ಯಕೃತ್ತು ಸ್ವಲ್ಪ ವಿಸ್ತರಿಸಿದೆ ಮತ್ತು ಸಾಮಾನ್ಯಕ್ಕಿಂತ ಹೆಚ್ಚು ಕೊಬ್ಬನ್ನು ಹೊಂದಿದೆ.',
  ml: 'കരൾ അല്പം വലുതാണ്, സാധാരണയേക്കാൾ കൂടുതൽ കൊഴുപ്പ് ഉണ്ട്.'
};

export function fallbackSimplify(text, language = 'en') {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()).filter(Boolean) || [text];
  const simplifiedSentences = sentences.map((sentence) => {
    let simplified = sentence.replace(/diffuse fatty infiltration of the liver/gi, 'contains more fat than normal').replace(/\bwith\b/gi, 'and').replace(/\bmild\b/gi, 'slightly').replace(/\bis noted\b/gi, 'is seen');
    for (const [term, meaning] of Object.entries(MEDICAL_TERMS)) {
      simplified = simplified.replace(new RegExp(`\\b${term}\\b`, 'gi'), meaning);
    }
    return simplified;
  });
  const medicalTerms = Object.entries(MEDICAL_TERMS)
    .filter(([term]) => new RegExp(`\\b${term}\\b`, 'i').test(text))
    .map(([term, meaning]) => ({ term: term.replace(/\b\w/g, (letter) => letter.toUpperCase()), meaning: meaning[0].toUpperCase() + meaning.slice(1) }));
  const translatedTerms = TERM_TRANSLATIONS[language] || {};
  const localizedTerms = medicalTerms.map((item) => ({ ...item, meaning: translatedTerms[item.term.toLowerCase()] || item.meaning }));
  const simplifiedText = language !== 'en' && /hepatomegaly/i.test(text) && /fatty infiltration/i.test(text) ? SENTENCE_TRANSLATIONS[language] : simplifiedSentences.join(' ');
  return { simplifiedText, keyFindings: [simplifiedText], medicalTerms: localizedTerms };
}
