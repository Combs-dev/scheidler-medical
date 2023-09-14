/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export type Service = {
     _id: string;
     name: string;
     description: string;
}

