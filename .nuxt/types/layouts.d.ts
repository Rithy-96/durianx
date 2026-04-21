import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    admin: ComponentProps<typeof import("D:/Project/durianX/durianX/app/layouts/admin.vue").default>
    "default-1": ComponentProps<typeof import("D:/Project/durianX/durianX/app/layouts/default-1.vue").default>
    "default-3": ComponentProps<typeof import("D:/Project/durianX/durianX/app/layouts/default-3.vue").default>
    default: ComponentProps<typeof import("D:/Project/durianX/durianX/app/layouts/default.vue").default>
  }
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false> | {
      [K in LayoutKey]: {
        name?: MaybeRef<K | false> | ComputedRef<K | false>
        props?: NuxtLayouts[K]
      }
    }[LayoutKey]
  }
}