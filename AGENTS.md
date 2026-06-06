# Biginner Agent Guidelines

## Design Principles

- Keep `src/app/**/page.tsx` thin. Pages should compose sections, export metadata, and handle route parameters only.
- Put reusable UI in `src/components/**`; put domain data and queries in `src/data/**`; put shared types in `src/types/**`.
- Prefer small components with one reason to change. Split when a component mixes layout, data selection, and repeated item rendering.
- Preserve existing routes and visible content unless the task explicitly asks for a UX change.

## TypeScript Rules

- Use `strict` TypeScript as the baseline. Do not use `any`.
- Prefer `ReadonlyArray<T>` for arrays passed through props, domain data, and derived collections.
- Mark object properties as `readonly` for domain types and component props when mutation is not required.
- Use `import type` for type-only imports.
- Let TypeScript infer obvious local primitive types. Add explicit types for exported data, props, route params, and public functions.

## Frontend Rules

- Route files own routing concerns; components own presentation.
- Data lookup and transformation should live behind named functions, not inline inside JSX.
- Use stable keys from domain data. Do not use array indexes as keys unless the list is static and no better identifier exists.
- Keep Tailwind classes readable and avoid redundant utilities such as `h-8 w-8` when `size-8` is equivalent.

## Documentation Rules

- Use TSDoc comments for exported shared surfaces: domain types and interfaces in `src/types/**`, domain data and query/helper functions in `src/data/**`, and reusable components in `src/components/**`.
- Keep route files thin and do not add comments only to satisfy documentation style in `src/app/**/page.tsx`.
- Comments must explain intent, domain meaning, constraints, or non-obvious behavior. Do not write comments that only restate the symbol name, TypeScript type, or JSX text.
- For exported functions in `src/data/**`, include `@param` and `@returns`. Document `null` and `undefined` cases explicitly.
- For exported domain interfaces, document important properties when the field meaning, ordering, URL relationship, or display contract is not obvious from the property name.
- For exported components, prefer a summary plus `@remarks` when the component owns data assumptions, composition responsibility, or reuse constraints. Do not list every prop unless that contract is non-obvious.
- Let TypeScript carry type information. Do not write JSDoc-style type annotations such as `@param {string}` in TSDoc.
- Do not comment obvious local variables, straightforward Tailwind classes, or markup whose meaning is already clear from the surrounding component.
- Prefer concise Japanese comments for project-specific learning content unless the surrounding code is already clearly English-only.

## Verification

Run these checks after meaningful code changes:

```bash
npm run type-check
npm run lint
npm run build
npx -y react-doctor@latest . --verbose
```

If a check cannot run, report the reason and the remaining risk.
