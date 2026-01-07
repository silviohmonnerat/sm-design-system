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