/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://t2casadosite.com.br', // substitua pelo seu domínio
  generateRobotsTxt: true, // cria também o robots.txt
  sitemapSize: 5000, // opcional, define quantas URLs por sitemap
  changefreq: 'weekly', // frequência de atualização
  priority: 0.8, // prioridade padrão das páginas
};
