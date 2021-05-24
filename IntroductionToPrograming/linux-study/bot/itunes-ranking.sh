#!/bin/bash

dirname="/linux-study/bot/itunes-ranking-rss"
mkdir -p $dirname
filename="${dirname}/hourly-ranking-`date '+%Y%m%d%H%M'`.xml"
echo "保存しました: $filename"
curl -s -o $filename -H "User-Agent: CrawlBot; wmt.tkn.121@gmail.com" https://itunes.apple.com/jp/rss/topsongs/limit=10/xml