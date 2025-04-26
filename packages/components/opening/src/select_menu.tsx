import React, { useState } from "react";

import styles from "./select_menu.module.css";

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
            className={styles.select_menu_container}
            style={
                {
                    "--menu-height": props.height,
                    "--menu-width": props.width,
                } as React.CSSProperties
            }
        >
            <button
                className={styles.menu_button}
                onClick={props.handleClickStart}
                onMouseEnter={() => selectOnly("isStart")}
                onMouseLeave={() => resetSelect()}
            >
                はじめる {isSelectMenu.isStart && "←"}
            </button>
            <button
                className={styles.menu_button}
                onClick={props.handleClickContinue}
                onMouseEnter={() => selectOnly("isContinue")}
                onMouseLeave={() => resetSelect()}
            >
                つづきから {isSelectMenu.isContinue && "←"}
            </button>
            <button
                className={styles.menu_button}
                onClick={props.handleClickOption}
                onMouseEnter={() => selectOnly("isOption")}
                onMouseLeave={() => resetSelect()}
            >
                オプション {isSelectMenu.isOption && "←"}
            </button>
        </div>
    );
};
