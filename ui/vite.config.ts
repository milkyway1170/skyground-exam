import react from "@vitejs/plugin-react";
import { instanceToPlain, plainToClass } from "class-transformer";
import { IsNotEmpty, IsString, validateSync } from "class-validator";
import path from "path";
import process from "process";
import { defineConfig, loadEnv } from "vite";

class EnvironmentVariables {
  @IsString()
  @IsNotEmpty()
  API_URL = '/api'  
}
  
interface IDefineEnv {
  name: string;
  config: () => {
    define: {
      [k: string]: string;
    };
  };
}

type EnvConfig = Record<string, string | number | boolean>;

export default defineConfig(({ mode }) => {
  const env = sanitizeEnv(loadEnv(mode, process.cwd(), ""));

  return {
    jsx: "react",
    server: {
      port: getPort(3000),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@/assets": path.resolve(__dirname, "./src/assets"),
        "@/api": path.resolve(__dirname, "./src/api"),
        "@/components": path.resolve(__dirname, "./src/components"),
        "@/ui": path.resolve(__dirname, "./src/ui"),
        "@/views": path.resolve(__dirname, "./src/views"),
        "@/hooks": path.resolve(__dirname, "./src/hooks"),
        "@/types": path.resolve(__dirname, "./src/types"),
        "@/config": path.resolve(__dirname, "./src/config"),
        "@/services": path.resolve(__dirname, "./src/services"),
        "@/utils": path.resolve(__dirname, "./src/utils"),
      },
    },
    plugins: [defineEnv(env), react()],
  };
});

function defineEnv(config: EnvConfig): IDefineEnv {
  const map = <T>([key, value]: [key: string, value: T]): [string, string] => [
    `import.meta.env.${key}`,
    JSON.stringify(value),
  ];
  return {
    name: "define-env",
    config() {
      return {
        define: Object.fromEntries(Object.entries(config).map(map)),
      };
    },
  };
}

function sanitizeEnv(config: EnvConfig): EnvConfig {
  const sanitized = plainToClass(EnvironmentVariables, config);
  const errors = validateSync(sanitized, { whitelist: true });
  if (errors.length > 0)
    throw new Error(errors.map((error) => error.toString()).join(","));
  return instanceToPlain(sanitized);
}

function getPort(defaultsTo: number): number {
  const port = process.env.PORT;
  const parsed = port != null ? parseInt(port, 10) : null;
  return parsed == null || Number.isNaN(parsed) ? defaultsTo : parsed;
}
