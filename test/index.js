'use strict'

const t = require('tap')
const { parser } = require('../lib/index.js')

const checks = [
  [],

  // universal selector
  ['*'],
  ['* > *'],
  ['> #a'],

  // pseudo :root
  [':root'],
  [':scope'], // same as root in this context
  [':root > *'],
  [':root > .workspace'],
  [':root > *.workspace'],
  [':root > .workspace[name=a]'],
  [':root > [name=bar]'],
  [':root > .workspace[version=1.0.0]'],
  [':root > .workspace[name=a][version=1.0.0]'],
  [':root > :root'],
  ['* > :root'],
  ['* :root'],
  [':root, :root'],
  ['#a *:root'],
  ['#a > :root'],
  ['#a ~ :root'],

  // pseudo miscelaneous
  [':empty'],
  [':root > :empty'],
  [':extraneous'],
  [':invalid'],
  [':link'],
  [':link'],
  [':missing'],
  [':private'],

  // :not pseudo-class
  [':not(#foo)'],
  [':root > .workspace:not(#b)'],
  [':root > .workspace > *:not(#bar)'],
  ['.bundled ~ :not(.workspace)'],
  ['*:root > *:empty:not(*[name^=a], #b)'],
  [':not(:not(:link))'],

  // has pseudo-class
  [':root > *:has(* > #bar@1.4.0)'],
  ['*:has(* > #bar@1.4.0)'],
  ['*:has(> #bar@1.4.0)'],
  ['.workspace:has(> * > #lorem)'],
  ['.workspace:has(* #lorem, ~ #b)'],

  // is pseudo-class
  [':is(#a, #b) > *'],
  // TODO: ipsum is not empty but it's child is missing
  // so it doesn't return a result here
  [':root > *:is(.prod:not(:empty), .dev > [name=bar]) > *'],
  [':is(*:semver(2.0.0), :semver(=2.0.0-beta.45))'],

  // type pseudo-class
  [':type()'],
  [':type(tag)'],
  [':type(alias)'],
  [':type(range)'],
  [':type(git)'],

  // path pseudo-class
  [':path(node_modules/*)'],
  [':path(node_modules/bar)'],
  [':path(./node_modules/bar)'],
  [':path(node_modules/foo/node_modules/bar)'],
  [':path(**/bar)'],
  [':path(*)'],
  [':path()'],

  // semver pseudo-class
  [':semver()'],
  [':semver(*)'],
  [':semver(2.0.0)'],
  [':semver(>=2)'],
  [':semver(~2.0.x)'],
  [':semver(2 - 3)'],
  [':semver(=1.4.0)'],
  [':semver(1.4.0 || 2.2.2)'],

  // attr pseudo-class
  [':attr([name=dasher])'],
  [':attr(dependencies, [bar="^1.0.0"])'],
  [':attr(dependencies, :attr([bar="^1.0.0"]))'],
  [':attr([keywords=lorem])'],
  [':attr(arbitrary, [foo$=oo])'],
  [':attr(arbitrary, [foo*=oo])'],
  [':attr(arbitrary, [foo|=oo])'],
  [':attr(funding, :attr([type=GitHub]))'],
  [':attr(arbitrary, foo, :attr(funding, [type=GH]))'],

  // attribute matchers
  ['[name]'],
  ['[name=a]'],
  ['[name=@npmcli/abbrev]'],
  ['[name=a], [name=b]'],
  ['[name=a], *[name=b]'],
  ['[name^=a]'],
  ['[name|=dash]'],
  ['[name$=oo]'],
  ['[description]'],
  ['[description~=ever]'],
  ['[description~=best]'],
  ['[name*=a]'],
  ['[arbitrary^=foo]'],

  // classes
  ['.workspace'],
  ['.workspace > *'],
  ['.workspace ~ *'],
  ['.dev'],
  ['.dev *'],
  ['.peer'],
  ['.optional'],
  ['.bundled'],
  ['.bundled ~ *'],

  // id selector
  ['#bar'],
  ['#bar@2.0.0'],
  ['#@npmcli/abbrev@2.0.0-beta.45'],
  ['#bar:semver(2.0)'],
  ['#bar:semver(2)'],
  ['#bar:semver(^2.0.0)'],
  ['#bar:semver(~2.0.0)'],
  ['#bar:semver(=2.0.0)'],
  ['#bar:semver(>=2.0.0)'],
  ['#bar:semver(<3.0.0)'],
  ['#bar:semver(2 - 3)'],
  ['#bar:semver(2.0.0 - 3.0.0)'],
  ['#bar:semver(*)'],
  ['#bar:semver(^2.0.0-beta.0)'],
  ['#bar:semver(>1.5.0 <3.0.0)'],
  ['#bar:semver(2.x)'],
  ['#bar:semver(2.x.x)'],
  ['#bar:semver(1||2)'],
  ['#bar:semver(1 || 2)'],
  ['#bar:semver(1 || 2.0.0)'],
  ['#bar:semver(1.4.0 || 2)'],
  ['#ipsum'],
  ['#bar > *'],
  [':root > #bar'],
  [':root > #bar > *'],
  [':root #bar > *'],
  [':root #bar:semver(1) > *'],
  [':root #bar:semver(1) ~ *'],
  ['#bar:semver(2), #foo'],
  ['#a, #bar:semver(2), #foo@2.2.2'],
]

for (const [query] of checks) {
  t.matchSnapshot(parser(query), query)
}

// missing attribute matcher on :attr
t.throws(
  () => parser(':attr(foo, bar)'),
  { code: 'EQUERYATTR' },
  'should throw on missing attribute matcher on :attr pseudo-class'
)
