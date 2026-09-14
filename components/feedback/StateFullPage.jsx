import { Button } from "../actions/Button.jsx";
import { IllustrationSystem403 } from './IllustrationSystem403.jsx';
import { IllustrationSystem404 } from './IllustrationSystem404.jsx';
import { IllustrationSystemArchived } from './IllustrationSystemArchived.jsx';
import { IllustrationSystemError } from './IllustrationSystemError.jsx';
import { IllustrationSystemMaintenance } from './IllustrationSystemMaintenance.jsx';
import { IllustrationSystemRestricted } from './IllustrationSystemRestricted.jsx';
import { StateIllustrationSlot } from './StateIllustrationSlot.jsx';

// Improved: the primary/secondary Buttons rendered with no onClick anywhere — now wired to `onPrimaryAction`/`onSecondaryAction` callback props.
// figma node: 7426:11968 State/Full Page (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function StateFullPage(_p = {}) {
  const props = { ..._p, technicalInfo: _p.technicalInfo ?? "Código de referência opcional", secondaryAction: _p.secondaryAction ?? true, technicalInfoVisible: _p.technicalInfoVisible ?? false, title: _p.title ?? "Acesso não autorizado", type: _p.type ?? "forbidden", description: _p.description ?? "Você não tem permissão para acessar esta página.", supportingInfo: _p.supportingInfo ?? "Se você acredita que isso é um erro, entre em contato com o administrador.", supportingInfoVisible: _p.supportingInfoVisible ?? true, eyebrowVisible: _p.eyebrowVisible ?? false, code: _p.code ?? "403", eyebrow: _p.eyebrow ?? "Estado do sistema", primaryAction: _p.primaryAction ?? true, codeVisible: _p.codeVisible ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 960,
      height: 700,
      backgroundColor: "var(--color-surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: "42px 80px 42px 80px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StateIllustrationSlot
        style={{
          position: "relative",
          width: 260,
          height: 190,
          flexShrink: 0,
        }}
        illustration={<IllustrationSystem403 />}
      />
      {props.codeVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.code}</span>
      )}
      {props.eyebrowVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.eyebrow}</span>
      )}
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 30,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      {props.supportingInfoVisible && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 16px 10px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 520,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.supportingInfo}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.primaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 144,
            flexShrink: 0,
          }}
          label={props.primaryActionLabel ?? "Voltar ao Nexo"}
          size={"default"}
          style2={"primary"}
          state={"default"}
          onClick={props.onPrimaryAction}
        />
        )}
        {props.secondaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 202,
            flexShrink: 0,
          }}
          label={props.secondaryActionLabel ?? "Consultar outro produto"}
          size={"default"}
          style2={"secondary"}
          state={"default"}
          onClick={props.onSecondaryAction}
        />
        )}
      </div>
      {props.onToggleTechnicalInfo && (
      <button type="button" onClick={props.onToggleTechnicalInfo} style={{
        position: "relative",
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        color: "var(--color-text-link)",
        flexShrink: 0,
      }}>{props.technicalInfoVisible ? "Ocultar detalhes técnicos" : (props.technicalInfoToggleLabel ?? "Ver detalhes técnicos")}</button>
      )}
      {props.technicalInfoVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "var(--font-mono)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "150%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.technicalInfo}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 960,
      height: 700,
      backgroundColor: "var(--color-surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: "42px 80px 42px 80px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StateIllustrationSlot
        style={{
          position: "relative",
          width: 260,
          height: 190,
          flexShrink: 0,
        }}
        illustration={<IllustrationSystem404 />}
      />
      {props.codeVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.code}</span>
      )}
      {props.eyebrowVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.eyebrow}</span>
      )}
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 30,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      {props.supportingInfoVisible && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 16px 10px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 520,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.supportingInfo}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.primaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 144,
            flexShrink: 0,
          }}
          label={props.primaryActionLabel ?? "Voltar ao Nexo"}
          size={"default"}
          style2={"primary"}
          state={"default"}
          onClick={props.onPrimaryAction}
        />
        )}
        {props.secondaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 131,
            flexShrink: 0,
          }}
          label={props.secondaryActionLabel ?? "Explorar o portal"}
          size={"default"}
          style2={"secondary"}
          state={"default"}
          onClick={props.onSecondaryAction}
        />
        )}
      </div>
      {props.onToggleTechnicalInfo && (
      <button type="button" onClick={props.onToggleTechnicalInfo} style={{
        position: "relative",
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        color: "var(--color-text-link)",
        flexShrink: 0,
      }}>{props.technicalInfoVisible ? "Ocultar detalhes técnicos" : (props.technicalInfoToggleLabel ?? "Ver detalhes técnicos")}</button>
      )}
      {props.technicalInfoVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "var(--font-mono)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "150%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.technicalInfo}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 960,
      height: 700,
      backgroundColor: "var(--color-surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: "42px 80px 42px 80px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StateIllustrationSlot
        style={{
          position: "relative",
          width: 260,
          height: 190,
          flexShrink: 0,
        }}
        illustration={<IllustrationSystemError />}
      />
      {props.codeVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.code}</span>
      )}
      {props.eyebrowVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.eyebrow}</span>
      )}
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 30,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      {props.supportingInfoVisible && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 16px 10px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 520,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.supportingInfo}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.primaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 141,
            flexShrink: 0,
          }}
          label={props.primaryActionLabel ?? "Tentar novamente"}
          size={"default"}
          style2={"primary"}
          state={"default"}
          onClick={props.onPrimaryAction}
        />
        )}
        {props.secondaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 144,
            flexShrink: 0,
          }}
          label={props.secondaryActionLabel ?? "Voltar ao Nexo"}
          size={"default"}
          style2={"secondary"}
          state={"default"}
          onClick={props.onSecondaryAction}
        />
        )}
      </div>
      {props.onToggleTechnicalInfo && (
      <button type="button" onClick={props.onToggleTechnicalInfo} style={{
        position: "relative",
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        color: "var(--color-text-link)",
        flexShrink: 0,
      }}>{props.technicalInfoVisible ? "Ocultar detalhes técnicos" : (props.technicalInfoToggleLabel ?? "Ver detalhes técnicos")}</button>
      )}
      {props.technicalInfoVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "var(--font-mono)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "150%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.technicalInfo}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 960,
      height: 700,
      backgroundColor: "var(--color-surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: "42px 80px 42px 80px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StateIllustrationSlot
        style={{
          position: "relative",
          width: 260,
          height: 190,
          flexShrink: 0,
        }}
        illustration={<IllustrationSystemRestricted />}
      />
      {props.codeVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.code}</span>
      )}
      {props.eyebrowVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.eyebrow}</span>
      )}
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 30,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      {props.supportingInfoVisible && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 16px 10px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 520,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.supportingInfo}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.primaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 127,
            flexShrink: 0,
          }}
          label={props.primaryActionLabel ?? "Voltar ao catálogo"}
          size={"default"}
          style2={"primary"}
          state={"default"}
          onClick={props.onPrimaryAction}
        />
        )}
        {props.secondaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 124,
            flexShrink: 0,
          }}
          label={props.secondaryActionLabel ?? "Consultar acesso"}
          size={"default"}
          style2={"secondary"}
          state={"default"}
          onClick={props.onSecondaryAction}
        />
        )}
      </div>
      {props.onToggleTechnicalInfo && (
      <button type="button" onClick={props.onToggleTechnicalInfo} style={{
        position: "relative",
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        color: "var(--color-text-link)",
        flexShrink: 0,
      }}>{props.technicalInfoVisible ? "Ocultar detalhes técnicos" : (props.technicalInfoToggleLabel ?? "Ver detalhes técnicos")}</button>
      )}
      {props.technicalInfoVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "var(--font-mono)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "150%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.technicalInfo}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 960,
      height: 700,
      backgroundColor: "var(--color-surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: "42px 80px 42px 80px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StateIllustrationSlot
        style={{
          position: "relative",
          width: 260,
          height: 190,
          flexShrink: 0,
        }}
        illustration={<IllustrationSystemArchived />}
      />
      {props.codeVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.code}</span>
      )}
      {props.eyebrowVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.eyebrow}</span>
      )}
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 30,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      {props.supportingInfoVisible && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 16px 10px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 520,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.supportingInfo}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.primaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 168,
            flexShrink: 0,
          }}
          label={props.primaryActionLabel ?? "Ver produto substituto"}
          size={"default"}
          style2={"primary"}
          state={"default"}
          onClick={props.onPrimaryAction}
        />
        )}
        {props.secondaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 141,
            flexShrink: 0,
          }}
          label={props.secondaryActionLabel ?? "Voltar ao catálogo"}
          size={"default"}
          style2={"secondary"}
          state={"default"}
          onClick={props.onSecondaryAction}
        />
        )}
      </div>
      {props.onToggleTechnicalInfo && (
      <button type="button" onClick={props.onToggleTechnicalInfo} style={{
        position: "relative",
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        color: "var(--color-text-link)",
        flexShrink: 0,
      }}>{props.technicalInfoVisible ? "Ocultar detalhes técnicos" : (props.technicalInfoToggleLabel ?? "Ver detalhes técnicos")}</button>
      )}
      {props.technicalInfoVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "var(--font-mono)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.technicalInfo}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 960,
      height: 700,
      backgroundColor: "var(--color-surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: "42px 80px 42px 80px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StateIllustrationSlot
        style={{
          position: "relative",
          width: 260,
          height: 190,
          flexShrink: 0,
        }}
        illustration={<IllustrationSystemMaintenance />}
      />
      {props.codeVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.code}</span>
      )}
      {props.eyebrowVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.eyebrow}</span>
      )}
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 30,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
      <span style={{
        position: "relative",
        width: 620,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      {props.supportingInfoVisible && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 16px 10px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 520,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          textAlign: "center",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.supportingInfo}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.primaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 141,
            flexShrink: 0,
          }}
          label={props.primaryActionLabel ?? "Voltar ao Nexo"}
          size={"default"}
          style2={"primary"}
          state={"default"}
          onClick={props.onPrimaryAction}
        />
        )}
        {props.secondaryAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 132,
            flexShrink: 0,
          }}
          label={props.secondaryActionLabel ?? "Tentar novamente"}
          size={"default"}
          style2={"secondary"}
          state={"default"}
          onClick={props.onSecondaryAction}
        />
        )}
      </div>
      {props.onToggleTechnicalInfo && (
      <button type="button" onClick={props.onToggleTechnicalInfo} style={{
        position: "relative",
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        color: "var(--color-text-link)",
        flexShrink: 0,
      }}>{props.technicalInfoVisible ? "Ocultar detalhes técnicos" : (props.technicalInfoToggleLabel ?? "Ver detalhes técnicos")}</button>
      )}
      {props.technicalInfoVisible && (
      <span style={{
        position: "relative",
        width: 560,
        fontFamily: "var(--font-mono)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "150%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.technicalInfo}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: Type=Forbidden
    "type=forbidden": __body0,
    // figma: Type=Not Found
    "type=not found": __body1,
    // figma: Type=Error
    "type=error": __body2,
    // figma: Type=Restricted
    "type=restricted": __body3,
    // figma: Type=Archived
    "type=archived": __body4,
    // figma: Type=Maintenance
    "type=maintenance": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default StateFullPage;
