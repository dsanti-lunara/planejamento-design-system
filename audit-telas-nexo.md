# Auditoria: telas do Nexo × inventário atual do design system

> **Nota de manutenção (atualização cirúrgica):** este arquivo foi escrito antes do pivô de arquitetura do MVP e descrevia telas/fluxos (wizard de publicação, DEV/HML/PRD, aprovação, Releases/Deployments, grupos manuais, Viewer/Analyst, solicitação de acesso) que **não fazem mais parte do contrato vigente**. O conteúdo pré-pivô foi preservado apenas como histórico de decisão na seção final, claramente marcada — não é instrução de implementação. Um agente que precise saber "o que existe hoje" deve usar apenas as seções abaixo até "Deprecated / Histórico de decisão".

## Contrato vigente (fonte de verdade)

```
Produto
├── Power BI        → link corporativo → validar → publicar
└── Projeto Nexo    → ZIP → validar → publicar

Publicação: direta em Produção (sem DEV/HML/PRD, sem aprovação, sem wizard)

Acesso: Hominum → CR + FUNCAORM → Regras → Produtos liberados
(sem cadastro geral de usuários, grupos manuais, Viewer/Analyst,
 listas manuais de leitores, solicitação/aprovação de acesso)

Admin: Produtos · Acessos · Publicações · Auditoria · Utilização · Saúde · Comunicados
```

Qualquer conteúdo abaixo de "Deprecated / Histórico de decisão" que contradiga isto **não é válido** — a seção atual sempre vence.

## 1. `/admin/acessos` — Overview, Regras de acesso, Exceções, Administradores
Cobertos por `templates/admin-acessos`: `AdminPageHeader`, `AdminSummaryKPICard`, `ChartDonut`/`ChartLegendItem`, `AdminFilterBar`, `DataTable`, `NavigationPagination`, `NavigationTabGroup` (4 abas: Overview/Regras de acesso/Exceções/Administradores), `InputText`/`Field`/`InputMultiSelect` (formulário de regra: CR list-ou-qualquer, FUNCAORM list-ou-qualquer), `NavSidebar`, `NavTopbar`. Sem componente de "grupo" manual — acesso é regra (CR+FUNCAORM), não grupo/lista de usuários.

## 2. `/admin/produtos` — lista, novo produto, detalhe
Cobertos por `templates/admin-produtos`, `templates/admin-produtos-novo`, `templates/admin-produtos-detalhe`: `AdminPageHeader`, `AdminSummaryKPICard`, `DataTable`, `BrandProductLogoTile`, `StatusBadge`, `FormFormSection` + campos de formulário, `ProductDetailHeader`, `NavigationTabGroup` com as 6 abas oficiais **Geral/Responsáveis/Acesso/Conteúdo/Publicações/Saúde** — sem "Releases"/"Deployments". A aba Acesso mostra regras/exceções do produto (visão contextual, gestão fica em `/admin/acessos`); Publicações mostra publicação atual + histórico, sem ambientes.

## 3. `/admin/publicacoes` — lista, nova publicação, detalhe
Cobertos por `templates/admin-publicacoes`, `templates/admin-publicacoes-nova`, `templates/admin-publicacoes-detalhe`: `DataTable` + `StatusBadge`, `FormFormSection` em página única (Produto → Tipo de conteúdo → Configuração → Validação → Acesso inicial → Resumo — não é wizard numerado), `DeploymentValidationItem`, `DeploymentTimelineItem`, `DeploymentLogRow`, `DataKeyValueList`. Publicação é destino único (Produção); não há `DeploymentApprovalItem` nem `DeploymentEnvironmentStateCard` (DEV/HML/PRD) nessas telas.

## 4. Comunicados, 403/404/erro
Cobertos por `templates/admin-comunicados*`, `templates/estados-sistema`: `NavigationTabGroup` + `DataTable`, `ContentRichTextEditor`, `Field`/`InputMultiSelect`/`InputTime`, `FeedbackAlert`, `DataKeyValueList`, `StateFullPage` + `IllustrationSystem403`/`404`/`Error`.

## 5. `/admin/auditoria`, `/admin/utilizacao`, `/admin/saude`
Cobertos por `templates/admin-auditoria`, `templates/admin-utilizacao`, `templates/admin-saude`: `AdminFilterBar`, `DataTable`, `AdminSummaryKPICard`, `UsageRankingBarList`, `HealthStatusCard`, `ChartArea`. **Auditoria** (ações administrativas) e **Utilização** (consumo/uso — Visão geral, Acessos nominais com histórico completo/sessões/heartbeat/exportação de registros filtrados/paginação server-side) são explicitamente separadas, telas distintas.

## 6. `home` / catálogo
Cobertos por `templates/portal-home`, `templates/catalogo`: `ShellPortal`, `NavSidebar`/`NavTopbar`, `HomeCategoryTile`, `ProductCard`, `HomeAnnouncementItem`, `TagCategoryChip`, `NavigationPagination`, `SearchGlobalSearch`.

## 7. `runtime`
Cobertos por `templates/runtime`: `RuntimeHeader`, `RuntimeShell`, `RuntimeReportEmbedFrame`, `StateFullPage` (maintenance), `FeedbackAlert`/`FeedbackSystemBanner`.

## 8. Detalhe do produto (autorizado, bloqueado, arquivado)
Cobertos por `templates/detalhe-produto`: `ProductDetailHeader`, `ProductOwnerCard`, `DataKeyValueList`, `ProductResourceLinkRow`, `IllustrationSystemRestricted`/`Archived`.

## 9. Login
Cobertos por `templates/login-flow`: `AuthSplitScreen`, `AuthBenefitItem`, `AuthLoginScreen`, `InputText`/`InputPassword`/`Button`/`FeedbackAlert`.

---

## Deprecated / Histórico de decisão

**Não usar o que segue como instrução de implementação.** Preservado apenas para registrar de onde veio a decisão de pivotar. O texto abaixo é a versão original deste arquivo (pré-pivô) e descreve uma arquitetura **que foi substituída**: publicação com wizard de 7 passos e ambientes DEV/HML/PRD com aprovação, e um modelo de acesso por usuários/grupos/roles. Nada aqui deve ser recriado.

> ## 1. `/admin/acessos` (overview, usuários, grupos) [pré-pivô]
> **Cobertos**: `AdminPageHeader`, `AdminSummaryKPICard` (5 KPIs), `ChartDonut` + `ChartLegendItem` ("Acessos por produto"), `AccessRecentAccessItem` ("Últimos acessos"), `AdminFilterBar`, `DataTable`/`AnalyticalDataTable` (tabela de usuários), `AccessGroupCard` (grid de grupos), `AccessPermissionChip`, `NavSidebar`, `NavTopbar`, `NavigationTabGroup` (Usuários/Grupos/Roles), `NavigationPagination`, `IdentityUserMenu`, `FeedbackNotificationBell`.
> **Gaps / observações**: nenhum gap de componente. A aba "Roles" na imagem não tem uma tela própria mostrada.
>
> ## 2. `/admin/produtos` (lista, novo produto, detalhe) [pré-pivô]
> **Cobertos**: (...) `NavigationTabGroup` (Geral/Responsáveis/Acesso/**Releases/Deployments**/Saúde) (...)
>
> ## 3. `/admin/publicacoes` (lista, nova publicação — **wizard de 7 passos**, detalhe de deployment) [pré-pivô]
> **Cobertos**: `DataTable` com `FeedbackLinearProgress` inline + `StatusBadge`, `NavigationStepper`/`NavigationWizardProgress` (wizard 7 etapas), `DeploymentTimelineItem` (timeline "Pacote enviado → Promoção para PRD"), `DeploymentValidationItem`, `DataKeyValueList` (metadados do pacote), `DeploymentApprovalItem` ("Histórico de **aprovações**"), `DeploymentLogRow` ("Logs recentes"), `DeploymentEnvironmentStateCard` ("Ambientes e transições" — **DEV/HML/PRD**).
>
> ## Resumo dos gaps reais [pré-pivô]
> 1. Login/autenticação — único fluxo sem componente dedicado (resolvido: ver `auth/` no readme).
> 2. Linha/cabeçalho de "Comunicado" — cobertura por composição.
> 3. Resto já coberto — mas a cobertura descrita para Publicações (wizard/ambientes) e Acessos (usuários/grupos/roles) foi **removida e substituída** pelo contrato vigente no topo deste arquivo.
