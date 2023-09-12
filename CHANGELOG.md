# Changelog

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
