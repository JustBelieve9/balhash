import type { NextConfig } from "next";

/**
 * Сайт собирается в статику: GitHub Pages умеет отдавать только файлы, без
 * сервера. Отсюда два следствия.
 *
 * 1. Оптимизатора картинок нет, поэтому `unoptimized`. Кадры заранее
 *    подготовлены скриптом: обложки берут превью на 1200 px, полный кадр
 *    остаётся для скачивания.
 * 2. Pages раздаёт репозиторий по адресу вида user.github.io/balhash, то есть
 *    из подпапки. Без basePath все ссылки на картинки уехали бы в корень
 *    домена и отдали 404.
 *
 * BASE_PATH задаётся только в GitHub Actions. Локально и на Vercel сайт живёт
 * в корне, и переменной нет.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // next/image подставляет basePath сам, а сырые href и poster - нет,
  // поэтому тот же префикс отдаётся в код через lib/asset.ts.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  // Pages отдаёт /about как /about/index.html, иначе ссылки без слеша ломаются.
  trailingSlash: true,
};

export default nextConfig;
