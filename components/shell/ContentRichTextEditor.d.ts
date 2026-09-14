import * as React from 'react';
export interface ContentRichTextEditorProps {
  className?: string;
  style?: React.CSSProperties;
  content?: string;
  state?: "empty" | "filled" | "focus" | "disabled" | "error";
  /** Text content; defaults to "Parágrafo⌄". */
  text1?: string;
  /** Text content; defaults to "B". */
  text2?: string;
  /** Text content; defaults to "I". */
  text3?: string;
  /** Text content; defaults to "U". */
  text4?: string;
}
export declare const ContentRichTextEditor: React.FC<ContentRichTextEditorProps>;
export default ContentRichTextEditor;
