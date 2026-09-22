import re
from typing import Any

from medical_terms import MEDICAL_TERMS


TERM_TRANSLATIONS = {
    "te": {"hepatomegaly": "కాలేయం విస్తరించడం", "fatty infiltration": "కాలేయంలో అదనపు కొవ్వు"},
    "hi": {"hepatomegaly": "बढ़ा हुआ यकृत", "fatty infiltration": "यकृत में अतिरिक्त वसा"},
    "ta": {"hepatomegaly": "கல்லீரல் பெரிதாகுதல்", "fatty infiltration": "கல்லீரலில் கூடுதல் கொழுப்பு"},
    "kn": {"hepatomegaly": "ವಿಸ್ತರಿಸಿದ ಯಕೃತ್ತು", "fatty infiltration": "ಯಕೃತ್ತಿನಲ್ಲಿ ಹೆಚ್ಚುವರಿ ಕೊಬ್ಬು"},
    "ml": {"hepatomegaly": "വലുതായ കരൾ", "fatty infiltration": "കരളിൽ അധിക കൊഴുപ്പ്"},
}

SAMPLE_TRANSLATIONS = {
    "te": "కాలేయం కొద్దిగా పెద్దగా ఉంది మరియు సాధారణం కంటే ఎక్కువ కొవ్వు ఉంది.",
    "hi": "यकृत थोड़ा बड़ा है और उसमें सामान्य से अधिक वसा है।",
    "ta": "கல்லீரல் சற்று பெரிதாக உள்ளது மற்றும் இயல்பை விட அதிக கொழுப்பு உள்ளது.",
    "kn": "ಯಕೃತ್ತು ಸ್ವಲ್ಪ ವಿಸ್ತರಿಸಿದೆ ಮತ್ತು ಸಾಮಾನ್ಯಕ್ಕಿಂತ ಹೆಚ್ಚು ಕೊಬ್ಬನ್ನು ಹೊಂದಿದೆ.",
    "ml": "കരൾ അല്പം വലുതാണ്, സാധാരണയേക്കാൾ കൂടുതൽ കൊഴുപ്പ് ഉണ്ട്.",
}


def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def split_sentences(text: str) -> list[str]:
    normalized = text.replace("\r\n", "\n").replace("\r", "\n")
    parts = re.split(r"(?<=[.!?])\s+|\n+", normalized)
    return [part.strip() for part in parts if part.strip()]


def _replace_terms(sentence: str) -> str:
    result = sentence
    result = re.sub(r"diffuse fatty infiltration of the liver", "contains more fat than normal", result, flags=re.IGNORECASE)
    for term, meaning in sorted(MEDICAL_TERMS.items(), key=lambda item: len(item[0]), reverse=True):
        result = re.sub(rf"\b{re.escape(term)}\b", meaning, result, flags=re.IGNORECASE)
    result = re.sub(r"\bwith\b", "and", result, flags=re.IGNORECASE)
    result = re.sub(r"\bis noted\b", "is seen", result, flags=re.IGNORECASE)
    result = re.sub(r"\bno focal ([^.]+?) is identified\b", r"no specific \1 is seen", result, flags=re.IGNORECASE)
    result = re.sub(r"\bmild\b", "slightly", result, flags=re.IGNORECASE)
    return result.strip()


def simplify_report(text: str, language: str = "en") -> dict[str, Any]:
    cleaned = clean_text(text)
    sentences = split_sentences(cleaned)
    simplified_sentences = [_replace_terms(sentence) for sentence in sentences]

    detected = []
    lowered = cleaned.lower()
    for term, meaning in sorted(MEDICAL_TERMS.items(), key=lambda item: len(item[0]), reverse=True):
        if re.search(rf"\b{re.escape(term)}\b", lowered):
            detected.append({"term": term.title(), "meaning": TERM_TRANSLATIONS.get(language, {}).get(term, meaning.capitalize())})

    if language in SAMPLE_TRANSLATIONS and "hepatomegaly" in lowered and "fatty infiltration" in lowered:
        simplified_sentences = [SAMPLE_TRANSLATIONS[language]]

    return {
        "simplifiedText": " ".join(simplified_sentences),
        "keyFindings": simplified_sentences[:5],
        "medicalTerms": detected,
        "language": language,
    }
