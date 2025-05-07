import eslintPluginImport from "eslint-plugin-import"

const importConfig = {
  files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // 対象ファイル
  plugins: {
    import: eslintPluginImport,
  },
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          ["builtin"], // Node.jsモジュールと外部パッケージ
          ["external"], // 外部モジュール（react, @mui 含む）
          ["internal"], // 内部モジュール
          ["parent", "sibling"], // 親/兄弟モジュール
          ["type"],
          ["index"], // インデックスファイル
        ],
        "newlines-between": "always", // グループ間に必ず空行を追加
        alphabetize: {
          order: "asc", // アルファベット順でソート
          caseInsensitive: true, // 大文字小文字を区別しない
        },
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before", // 外部モジュールの最上位に配置
          },
          {
            pattern: "@mui/**",
            group: "external",
            position: "before", // react の次に配置
          },
          {
            pattern: "./**/*.css",
            group: "index",
            position: "before", // CSS を internal の先頭に配置
          },
          {
            pattern: "@/features/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/hooks/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/types/**",
            group: "type",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "react"], // 'pathGroups' ルールの中で使用
      },
    ],
  },
}

export default importConfig
