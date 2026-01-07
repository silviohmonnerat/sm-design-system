## 📦 ESTRUTURA FINAL RECOMENDADA

packages/
├── ui            → @silviomonnerat/ui
├── react-hooks   → @silviomonnerat/react-hooks
├── env           → @silviomonnerat/env
├── utils         → @silviomonnerat/utils

## 📏 REGRA DE NAMING (DOCUMENTE ISSO)

Use esta regra simples:

🔹 UI

Componentes visuais reutilizáveis
Nome: ui

🔹 Hooks

Hooks específicos de framework
Nome: <framework>-hooks

🔹 Config / Env

Configuração e variáveis
Nome: env ou config

🔹 Utils

Funções puras e helpers
Nome: utils

## 🧠 FLUXO FINAL DO DIA A DIA (guarde isso)

### 🔁 Desenvolver

```sh git checkout -b feat/new-component```

### code

```sh 
pnpm changeset
git commit
git push
```

🔍 PR

- CI valida build
- CI exige changeset
- PR aprovado → merge

🚀 Merge

- CI versiona
- CI publica
- CI cria release
- npm recebe nova versão

🔥 Zero erro humano


### Se os pacotes foram publicados há menos de 72h:

```sh 
npm unpublish @silviomonnerat/ui --force
npm unpublish @silviomonnerat/hooks --force
npm unpublish @silviomonnerat/env --force
npm unpublish @silviomonnerat/helpers --force
```

### Se os pacotes foram publicados há mais de 72h:

```sh 
npm deprecate @silviomonnerat/ui@"<999.0.0" "Deprecated: incorrect initial releases"
npm deprecate @silviomonnerat/hooks@"<999.0.0" "Deprecated: incorrect initial releases"
npm deprecate @silviomonnerat/env@"<999.0.0" "Deprecated: incorrect initial releases"
npm deprecate @silviomonnerat/helpers@"<999.0.0" "Deprecated: incorrect initial releases"
```