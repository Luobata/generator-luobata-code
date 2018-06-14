'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-luobata-code:app', () => {
    beforeAll(() => {
        return helpers
            .run(path.join(__dirname, '../generators/app'))
            .withPrompts({
                projectName: 'luobata',
                projectDesc: 'test',
                someAnswer: true,
            });
    });

    it('creates files', () => {
        assert.file([
            'LICENSE',
            '.babelrc',
            '.gitignore',
            '.tern-project',
            '.eslintrc',
            'package.json',
            'tsconfig.json',
            'tslint.json',
            '.editorconfig',
            'src/index.js',
            'test/index.js',
            'dist',
            'asserts',
            'build',
            'src',
            'index.html',
            'test.html',
            'build/rollup.config.js',
            'build/dev-server.js',
            'build/dev-client.js',
            'build/webpack.config.js',
            'build/webpack.config.build.js',
        ]);
    });
});
