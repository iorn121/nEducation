#!/bin/bash
read -p "日本で2番目に高い山は槍ヶ岳である [Y/n]" answer
if [ $answer = "n" ];then
  echo 正解です！　日本で2番目に高い山は北岳です！
else
  echo 残念、不正解です！　日本で2番目に高い山は槍ヶ岳ではなく北岳です！
fi