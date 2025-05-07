import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import importConfig from "./eslint/eslint.config.import.mjs"
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin" // importを使う
import parser from "@typescript-eslint/parser" // TypeScriptパーサーをインポート

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends(
        "eslint-config-prettier", // Prettierとの統合
        "plugin:react/recommended", // React用の推奨設定
        "plugin:react-hooks/recommended", // React Hooksの推奨設定
    ),
    importConfig,

    {
        languageOptions: {
            parser, // parserにTypeScript用パーサーを設定
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin, // プラグインをオブジェクト形式で指定
        },
        rules: {
            "no-console": "warn",
            "react-hooks/exhaustive-deps": "error",
            "react-hooks/rules-of-hooks": "error",
            "@typescript-eslint/consistent-type-imports": "error", // 型インポートの一貫性を保つ
            "react/prop-types": "off", // TypeScript使用時はPropTypes不要
            "react/jsx-uses-react": "off", // React 17以降、JSXでReactをインポートしなくて良い
            "react/jsx-uses-vars": "error", // JSX内で使用された変数は未使用警告しない
            "react/no-unknown-property": "off", // この行を追加して無効化
            "react/react-in-jsx-scope": "off",
        },
        settings: {
            react: {
                version: "detect", // Reactのバージョンを自動検出
            },
        },
    },
]

export default eslintConfig
