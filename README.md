# Commands:
1. git init
1. pnpm init
1. touch pnpm-workspace.yaml
1. code pnpm-workspace.yaml

```yaml
packages:
  - 'packages/*'
  - 'projects/*'
  - 'libraries/*'
  - 'apps/*'
  - '!**/test/**'
```
1. Install common dependencies to all subprojects:
```bash
pnpm add typescript -w
```
> Flag -w indicates the dependency will be installed in "workspace root" (the main project) but it will be available for all projects

1. configure ```typescript``` with: ```pnpm exec tsc --init```

1. Update the following values:
    - target: 'ES6'
    - module: 'ES6'
    - outDir: './dist'

## Creation of sub projects:
1. Create folder ./packages

### Utilities:
1. Inside ./packages, execute:

```bash
mkdir utilities
cd utilities
pnpm init
```
1. Go to ./packages/utilities
1. Create file ./src/main.ts

```typescript
export type BaseType = Record<string, any>;

export enum Status {
    SUCCESS=1, FAIL=0, UNKNOW=-1
}

export interface BaseDTO {
    id: number,
    data: BaseType,
    other?: any
}

export interface ValidateResult {
    result: Status,
    data?: BaseDTO,
    errors?: string[]
}

export function validateBaseDTO(object:any): ValidateResult
{   const validation = (object?.id && object.id > 0)
    return {
        result: validation? Status.SUCCESS : Status.FAIL,
        data: object as BaseDTO,
        errors: validation? [] : ["is is incorrect"]
    }    
}  
```

### Backend
1. Go to ./packages

```bash
nest new backend
cd backend
pnpm run start:dev
```
### Frontend
1. Go to ./packages

```bash
npx create-next-app@latest
```
Create a new ```frontend``` project and answer the proper values

### Interconnect dependencies:

1. Go to ./packages/backend
1. Update package.json to include the new dependency:

```
"utilities": "workspace:*"
```

1. Now go to the ```app.service.ts``` file and include the following code:

```javascript
 getHello(): BaseDTO {
    const base: BaseDTO = {
      id: 1,
      data: { name: 'Alexander', age: 39 },
    };
    return base;
  }
```




------------------------

## Quick Tips
> It is possible to execute scripts of each subproject from the root directory like this:

```bash
pnpm --filter subproyect1 run build
```

------------------------

### Open Questions:

#### How Can I:

1. List all subprojects?
1. Visualize the inter dependencies between projects?
2. Execute an specific command in one project?
3. Execute a command in all the subprojects? (test, build, ...)
4. Check the dependencies between my subprojects?
5. Publish my project only when my commits include a new feature?

> There's a lot of room for improvement


