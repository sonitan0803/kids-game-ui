/**
 * キャラクターのバトルステータス情報を表すデータ型。
 */
export interface CharacterData {
    /** キャラクターの名前 */
    name: string

    /** 最大HP（ヒットポイント） */
    totalHp: number

    /** 現在のHP（ヒットポイント） */
    currentHp: number

    /** 最大MP（マジックポイント） */
    totalMp: number

    /** 現在のMP（マジックポイント） */
    currentMp: number

    /** キャラクター画像のURL（省略可能） */
    characterImage?: string
}
