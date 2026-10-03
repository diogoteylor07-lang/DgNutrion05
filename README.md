# DgNutrion05

Aplicativo Android de controle alimentar, offline-first, em português do Brasil.

## Fundação — Fase 1

Stack:
- React Native + Expo SDK 57 + TypeScript
- Expo Router
- SQLite + Drizzle ORM
- Zustand
- TanStack Query
- FTS5 habilitado
- Arquitetura por camadas

## Requisitos

- Node.js 22 LTS
- Android Studio + Android SDK
- JDK compatível com o SDK/Gradle instalado
- Emulador Android ou aparelho físico

## Instalação

```bash
npm install
npx expo install
npx expo run:android
```

Para iniciar o bundler:

```bash
npm start
```

## Estrutura

```text
app/                 rotas e telas
src/domain/          regras puras e cálculos
src/application/     casos de uso
src/data/             SQLite, Drizzle, repositórios
src/services/         integrações externas
src/features/         funcionalidades de UI
src/shared/           utilitários e tema
tests/                testes de domínio
```

## Regras importantes

- Interface principal em pt-BR.
- SQLite é a fonte de verdade local.
- Nenhum cálculo arredonda internamente; arredondamento ocorre apenas na apresentação.
- Alimentos crus e preparados são estados distintos.
- Diário guarda snapshot nutricional histórico.
- Dados importados de saúde têm origem e auditoria.
- Gasto energético não soma automaticamente TMB com um valor que já seja gasto total do relógio.
- Backup/exportação será tratado como funcionalidade de primeira classe.
- SQLCipher não faz parte da Fase 1.
- Nenhuma conta, servidor, assinatura, anúncio ou API paga é necessária para o núcleo.

## Próximas fases

A implementação seguirá as 11 fases da arquitetura aprovada. Cada fase deve ser revisada antes da próxima.
