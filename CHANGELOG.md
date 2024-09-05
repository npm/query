# Changelog

## [4.0.0](https://github.com/npm/query/compare/v3.1.0...v4.0.0) (2024-09-03)
### ⚠️ BREAKING CHANGES
* `@npmcli/query` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`77f5687`](https://github.com/npm/query/commit/77f568749a5da77319fb54ec44bf05839cbf9769) [#84](https://github.com/npm/query/pull/84) align to npm 10 node engine range (@hashtagchris)
### Dependencies
* [`a2de127`](https://github.com/npm/query/commit/a2de12757c6c2f894c0240e7c787587b2d8fc9e3) [#82](https://github.com/npm/query/pull/82) update postcss-selector-parser range to ^6.1.2 (#82)
### Chores
* [`e9f41b7`](https://github.com/npm/query/commit/e9f41b7172a0b166138e9ecd87b5f468a1cd8516) [#84](https://github.com/npm/query/pull/84) run template-oss-apply (@hashtagchris)
* [`ab69454`](https://github.com/npm/query/commit/ab69454c07b226c1573a958ac383cc26b6be2990) [#81](https://github.com/npm/query/pull/81) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`0fa83b6`](https://github.com/npm/query/commit/0fa83b6e52ce84938c5d5d9835a4017664ec831d) [#70](https://github.com/npm/query/pull/70) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`089a7c9`](https://github.com/npm/query/commit/089a7c96749dbd8080c1bd4ecb74eeed5467f258) [#79](https://github.com/npm/query/pull/79) postinstall for dependabot template-oss PR (@hashtagchris)
* [`aab917a`](https://github.com/npm/query/commit/aab917ad94dac31b76b296fe770ee50350403ddb) [#79](https://github.com/npm/query/pull/79) bump @npmcli/template-oss from 4.22.0 to 4.23.3 (@dependabot[bot])

## [3.1.0](https://github.com/npm/query/compare/v3.0.1...v3.1.0) (2024-02-23)

### Features

* [`5541137`](https://github.com/npm/query/commit/5541137875fd476e51bf213a84480822710cf959) [#65](https://github.com/npm/query/pull/65) add :vuln pseudo class (@wraithgar)

### Chores

* [`e0d574d`](https://github.com/npm/query/commit/e0d574d6be929696d3133c3cff39fbdd4f6f2bf1) [#65](https://github.com/npm/query/pull/65) namespace tests (@wraithgar)
* [`8be927d`](https://github.com/npm/query/commit/8be927d62bc92d85d04e4f731232f0d7fb8fab39) [#63](https://github.com/npm/query/pull/63) postinstall for dependabot template-oss PR (@lukekarrys)
* [`65fffaa`](https://github.com/npm/query/commit/65fffaa371325990e5c81292df72de9e0c21472a) [#63](https://github.com/npm/query/pull/63) bump @npmcli/template-oss from 4.21.1 to 4.21.3 (@dependabot[bot])
* [`ea880df`](https://github.com/npm/query/commit/ea880df8c79bba7e37e708a8b541c0a39226d240) [#60](https://github.com/npm/query/pull/60) postinstall for dependabot template-oss PR (@lukekarrys)
* [`ce05634`](https://github.com/npm/query/commit/ce0563422284946ec2f526cd0549b23c172bd93d) [#60](https://github.com/npm/query/pull/60) bump @npmcli/template-oss from 4.19.0 to 4.21.1 (@dependabot[bot])
* [`2c037c8`](https://github.com/npm/query/commit/2c037c8d7b519d841f97eb73c19da3772f473a4f) [#42](https://github.com/npm/query/pull/42) postinstall for dependabot template-oss PR (@lukekarrys)
* [`57eb5db`](https://github.com/npm/query/commit/57eb5db6382f01e3388bacf2b0361e195affcb79) [#42](https://github.com/npm/query/pull/42) bump @npmcli/template-oss from 4.18.1 to 4.19.0 (@dependabot[bot])
* [`653f22f`](https://github.com/npm/query/commit/653f22f471c141405339ee034a870b83a09be76c) [#41](https://github.com/npm/query/pull/41) postinstall for dependabot template-oss PR (@lukekarrys)
* [`c9d2318`](https://github.com/npm/query/commit/c9d231895e3404a82ba77eacbb8c162af8dbd582) [#41](https://github.com/npm/query/pull/41) bump @npmcli/template-oss from 4.18.0 to 4.18.1 (@dependabot[bot])

## [3.0.1](https://github.com/npm/query/compare/v3.0.0...v3.0.1) (2023-09-12)

### Bug Fixes

* [`b9e5740`](https://github.com/npm/query/commit/b9e574088f53052c6d13fc0c212896184dc45a2f) [#31](https://github.com/npm/query/pull/31) allow semver arguments to be reversed (#31) (@nlf)

## [3.0.0](https://github.com/npm/query/compare/v2.0.0...v3.0.0) (2022-10-11)

### ⚠️ BREAKING CHANGES

* You can no longer select a version along with an name selector (i.e. `#npm@9.0.0`).  Use `#name:semver()` instead.

### Features

* [`cc088f7`](https://github.com/npm/query/commit/cc088f794af6076241dcb40627c3826dd69951fc) remove version parsing from #name selector (@wraithgar)

### Dependencies

* [`2b4e8f8`](https://github.com/npm/query/commit/2b4e8f85f58fe26d908149f6820a383c7e4d41d3) [#24](https://github.com/npm/query/pull/24) remove semver
* [`d8a7c89`](https://github.com/npm/query/commit/d8a7c892459cac9474ac349b6b84d0517eef85a6) remove npm-package-arg

## [2.0.0](https://github.com/npm/query/compare/v1.2.0...v2.0.0) (2022-09-20)

### ⚠️ BREAKING CHANGES

* this package is now compatible with the following semver change for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`34ea05a`](https://github.com/npm/query/commit/34ea05ab7d20da1bd4eef0ee3b4d90832ee86f9d) [#16](https://github.com/npm/query/pull/16) add support for :outdated pseudo selector (#16) (@nlf)
* [`b30604e`](https://github.com/npm/query/commit/b30604e8e85cbee8f600f10ecf27a087cc5e118c) [#18](https://github.com/npm/query/pull/18) postinstall for dependabot template-oss PR (@nlf)

## [1.2.0](https://github.com/npm/query/compare/v1.1.1...v1.2.0) (2022-08-18)


### Features

* extend the semver pseudo selector to allow additional parameters ([#8](https://github.com/npm/query/issues/8)) ([3cf1b58](https://github.com/npm/query/commit/3cf1b58d7db50b39834fb69d5ade2c6635a7d9e1))

## [1.1.1](https://github.com/npm/query/compare/v1.1.0...v1.1.1) (2022-08-03)


### Bug Fixes

* unescape attr slashes ([#5](https://github.com/npm/query/issues/5)) ([0351e00](https://github.com/npm/query/commit/0351e00389653c6682a49be17538588a62759c4b))

## [1.1.0](https://github.com/npm/query/compare/v1.0.2...v1.1.0) (2022-06-28)


### Features

* assign qualifiedAttribute to attributeMatcher ([8553a7f](https://github.com/npm/query/commit/8553a7fc0296b78feec5ca066bda8f859c6dc193))


### Bug Fixes

* assign insensitive flag for attr matcher ([bfcfd64](https://github.com/npm/query/commit/bfcfd64b1e3de5377ba6fc3c05a64902bb3e69f1))

## [1.0.2](https://github.com/npm/query/compare/v1.0.1...v1.0.2) (2022-06-27)


### Dependencies

* npm-package-arg@9.1.0 ([#1](https://github.com/npm/query/issues/1)) ([ce04cd0](https://github.com/npm/query/commit/ce04cd05e67a0dd0b8fd3358f6f7dcc3892935a0))
