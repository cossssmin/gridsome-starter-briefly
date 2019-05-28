const fs = require('fs')
const moment = require('moment')
const slugify = require('@sindresorhus/slugify')

const title = process.argv[2]
const blogdir = './content/posts'
const postDate = moment().format('YYYY-MM-DD HH:mm:ss')

if (!title) {
  console.log('❌  Please specify a post title.')
  return
}

const basename = `${moment().format('YYYY-MM-DD')}-${slugify(title)}`

const contents = `---
title: "${title}"
description: ""
date: ${postDate}
---
`

fs.writeFile(`${blogdir}/${basename}.md`, contents, () => console.log(`✔ Created ${blogdir}/${basename}.md`))
