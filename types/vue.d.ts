interface VuePlugin {
  $sanitize: (html: string) => string;
}

declare module "vue" {
  // eslint-disable-next-line
  interface ComponentCustomProperties extends VuePlugin {}
}