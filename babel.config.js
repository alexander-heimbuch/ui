module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['> 0.25%', 'not dead']
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime'
  ]
}
