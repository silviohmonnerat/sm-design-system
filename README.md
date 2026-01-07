## 📦 ESTRUTURA FINAL RECOMENDADA

```
packages/
├── ui            → @silviomonnerat/ui
├── react-hooks   → @silviomonnerat/react-hooks
├── env           → @silviomonnerat/env
├── utils         → @silviomonnerat/utils
```

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

```sh
# código
git add .

pnpm changeset   # define versão

pnpm commit      # commit convencional
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

📦 Quando escolher PATCH (1.0.0 → 1.0.1)

Use patch quando:

- 🐛 Bugfix
- 🧹 Refactor interno
- ⚡ Performance
- 📄 Docs internos
- 🔒 Segurança sem quebra
- Ajustes que não mudam API pública

Exemplos:
  
- Corrigir valor de env
- Ajustar tipagem interna
- Corrigir hook sem mudar assinatura

📦 Quando escolher MINOR (1.0.0 → 1.1.0)

Use minor quando:

- ✨ Nova feature
- ➕ Nova prop
- ➕ Novo hook
- ➕ Novo helper
- API antiga continua funcionando

Exemplos:

- Novo hook em react-hooks
- Nova variante em ui
- Nova função utilitária

📦 Quando escolher MAJOR (1.0.0 → 2.0.0)

Use major quando:

- 💥 Quebra de API
- ❌ Remove algo
- 🔁 Muda comportamento esperado
- ⚠️ Muda contrato público

Exemplos

- Remove prop
- Muda nome de função
- Hook passa a exigir novo parâmetro
- Componente muda comportamento default
