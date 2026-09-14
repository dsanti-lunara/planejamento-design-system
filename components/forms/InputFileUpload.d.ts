import * as React from 'react';
export interface InputFileUploadProps {
  className?: string;
  style?: React.CSSProperties;
  fileTitle?: string;
  state?: "empty" | "uploading" | "uploaded" | "error" | "disabled";
  supportingText?: string;
  removeAction?: boolean;
  /** Text content; defaults to "↑". */
  text1?: string;
  accept?: string;
  errorText?: string;
  onFileSelected?: (file: File | null) => void;
}
export declare const InputFileUpload: React.FC<InputFileUploadProps>;
export default InputFileUpload;
