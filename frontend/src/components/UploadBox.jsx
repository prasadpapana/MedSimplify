import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export default function UploadBox({ file, onFile, disabled }) {
  const inputRef = useRef(null);
  const handleChange = (event) => onFile(event.target.files?.[0] || null);
  const handleDrop = (event) => {
    event.preventDefault();
    if (!disabled) onFile(event.dataTransfer.files?.[0] || null);
  };

  return (
    <div className={`upload-box ${file ? 'has-file' : ''}`} onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>
      <input ref={inputRef} type="file" accept="application/pdf,.pdf" onChange={handleChange} hidden />
      <div className="upload-icon"><Upload /></div>
      {file ? <><strong>{file.name}</strong><span>{(file.size / 1024 / 1024).toFixed(2)} MB · PDF ready</span><Button variant="ghost" size="sm" type="button" onClick={() => onFile(null)}>Remove file</Button></> : <><strong>Drag & drop your medical report here</strong><span>PDF only · Maximum 10 MB</span><Button variant="outline" type="button" onClick={() => inputRef.current?.click()} disabled={disabled}>Choose PDF</Button></>}
    </div>
  );
}
