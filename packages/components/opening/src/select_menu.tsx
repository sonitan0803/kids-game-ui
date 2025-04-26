/** @jsxImportSource @emotion/react */ // この行を追加
import React, { useState } from "react";

import { css } from "@emotion/react";

// コンポーネントスタイルの定義
const buttonStyle = css`
    background-color: black;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

/**
 * SelectMenu コンポーネントは、はじめる／つづきから／オプション の3つの縦並びボタンを表示するメニューです。
 *
 * 各ボタンに対してコールバック関数を渡すことで、クリック時の動作を制御できます。
 *
 * ホバー中は該当ボタンの右側に矢印「←」が表示され、選択中であることを視覚的に示します。
 */
export type SelectMenuProps = {
    /** コンポーネント全体の高さ（例: `"300px"`） */
    height?: string;
    /** コンポーネント全体の幅（例: `"200px"`） */
    width?: string;
    /** 「はじめる」ボタンのクリック時に呼ばれるコールバック関数 */
    handleClickStart: () => void;
    /** 「つづきから」ボタンのクリック時に呼ばれるコールバック関数 */
    handleClickContinue: () => void;
    /** 「オプション」ボタンのクリック時に呼ばれるコールバック関数 */
    handleClickOption: () => void;
};

interface SelectMenuFlag {
    isStart: boolean;
    isContinue: boolean;
    isOption: boolean;
}

export const SelectMenu: React.FC<SelectMenuProps> = (
    props: SelectMenuProps
) => {
    const [isSelectMenu, setSelectMenu] = useState<SelectMenuFlag>({
        isStart: false,
        isOption: false,
        isContinue: false,
    });

    const selectOnly = (key: keyof SelectMenuFlag) => {
        setSelectMenu({
            isStart: false,
            isContinue: false,
            isOption: false,
            [key]: true,
        });
    };

    const resetSelect = () => {
        setSelectMenu({
            isStart: false,
            isContinue: false,
            isOption: false,
        });
    };

    return (
        <div
            // className={styles.container}
            style={
                {
                    "--menu-height": props.height,
                    "--menu-width": props.width,
                    backgroundColor: "red",
                } as React.CSSProperties
            }
        >
            <button
                css={buttonStyle}
                style={{ width: "100%", backgroundColor: "blue" }}
                onClick={props.handleClickStart}
                onMouseEnter={() => selectOnly("isStart")}
                onMouseLeave={() => resetSelect()}
            >
                はじめる {isSelectMenu.isStart && "←"}
            </button>
            <button
                css={buttonStyle}
                // className={styles.menuButton}
                onClick={props.handleClickContinue}
                onMouseEnter={() => selectOnly("isContinue")}
                onMouseLeave={() => resetSelect()}
            >
                つづきから {isSelectMenu.isContinue && "←"}
            </button>
            <button
                css={buttonStyle}
                onClick={props.handleClickOption}
                onMouseEnter={() => selectOnly("isOption")}
                onMouseLeave={() => resetSelect()}
            >
                オプション {isSelectMenu.isOption && "←"}
            </button>
        </div>
    );
};
