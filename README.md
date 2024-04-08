# Create T3 App

## 初始化

### 创建

```bash
pnpm create t3-app@latest
```

### 配置

- What will your project be called? t3-demo
- Will you be using TypeScript or JavaScript? TypeScript
- Will you be using Tailwind CSS for styling? Yes
- Would you like to use tRPC? Yes
- What authentication provider would you like to use? None
- What database ORM would you like to use? Prisma
- EXPERIMENTAL Would you like to use Next.js App Router? No
- What database provider would you like to use? SQLite
- Should we initialize a Git repository and stage the changes? No
- Should we run 'pnpm install' for you? No
- What import alias would you like to use? ~/

### 运行

```bash
cd t3-demo
pnpm install
pnpm db:push
pnpm dev
```

### 数据库

- 查看数据库

```bash
npx prisma studio
```

- 更新数据库

```bash
npx prisma db push
```

## 添加 clerk

### 安装

```bash
pnpm add @clerk/nextjs
```

### 添加上下文

在 \_app.tsx 中添加 \<ClerkProvider\>组件

```tsx
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
```

### 登录

- 登录组件

```tsx
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
);

export default SignInPage;
```

![sign in](/public/readme/signin.png)

### 获取用户信息

- 登出组件 SignInButton
- 用户组件 UserButton

```tsx
import { SignIn } from "@clerk/nextjs";
import { SignInButton, useUser, UserButton } from "@clerk/nextjs";

const SignInPage = () => (
  <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
);

export default function () {
  const user = useUser();

  return !user.isSignedIn ? <SignInButton /> : <UserButton />;
}
```
