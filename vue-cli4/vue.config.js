const path = require('path')
const fs = require('fs')
const glob = require('glob')


function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const pageDir = resolve('./src/views')

function generatePages() {
  const pages = {}
  const entries = glob(`${pageDir}/*/main.js`, { sync: true })
  entries.forEach(entry => {
    const entrySplitList = entry.split('/')
    const pageName = entrySplitList[entrySplitList.length - 2]
    const pageHtmlSplitList = entrySplitList.slice(0, -1).concat('index.html')
    let pageHtml = path.resolve(...pageHtmlSplitList)
    if (!fs.existsSync(pageHtml)) {
      pageHtml = resolve('./public/index.html')
    }
    pages[pageName] = {
      entry,
      template: pageHtml,
      filename: `${pageName}.html`
    }
  })
  return pages
}

module.exports = {
  // https://cli.vuejs.org/zh/config/#pages
  // pages: generatePages(),
  pages: {
    home: {
      entry: 'src/views/home/main.js',
      title: '首页'
    },
    about: {
      entry: 'src/views/about/main.js',
      title: '关于'
    }
  },
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 11020,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
