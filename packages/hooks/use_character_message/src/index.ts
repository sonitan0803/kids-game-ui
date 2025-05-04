import { useState } from "react";

export interface CharacterMessageProps {
    message: string;
    characterName: string;
    characterImage?: string;
}

/**
 * キャラクターのセリフを順に表示するカスタムフック
 * @param messageList 表示するメッセージの配列
 */
export const useCharacterMessage = (props: CharacterMessageProps[]) => {
    const [index, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);

    if (!props[index]) {
        throw new Error("セリフデータが不正です。");
    }

    const currentMessage = props[index].message;
    const currentImage = props[index]?.characterImage;
    const currentName = props[index].characterName;

    const handleMessageClick = () => {
        if (index < props.length - 1) {
            setIndex(index + 1);
        } else {
            setIsEnd(true);
        }
    };

    return {
        currentMessage,
        currentImage,
        currentName,
        handleMessageClick,
        isEnd,
        reset: () => {
            setIndex(0);
            setIsEnd(false);
        },
    };
};
