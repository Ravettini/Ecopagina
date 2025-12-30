/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ECO_USER?: string;
  readonly VITE_ECO_PASS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

