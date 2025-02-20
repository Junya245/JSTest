/* eslint-disable no-unused-vars */
/// <reference lib="dom" />

// - 問題5:要素のテキストを変更する関数を作ろう
//    要素id(elementId)とテキスト(text)を引数として受け取ります。
//    受け取ったelementIdでdocumentからタグをさがして、あればそのタグのテキストを、引数で受け取ったtextに変えましょう。
//    もしそのタグが見つからなかった場合は引数で受け取ったidを持つdivタグをつくり引数で受け取ったtextに変更してbodyタグの子要素として追加しましょう。

/**
 * @param {string} elementId
 * @param {string} text
 */

export const changeElementText = (elementId, text) => {
  //elementidを取得
  const parent = document.getElementById(elementId);
  //テキスト変更
  parent.textContent = text;
  //divタグを作る
  const child = document.createElement("div");
  //テキスト変更
  child.textContent = text;
  //子要素追加
  parent.appendChild(child);
};
