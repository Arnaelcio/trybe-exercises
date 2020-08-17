#!/bin/bash

 DIR=$1
 EXT=$2
 DIA=$(date +%Y-%m-%d) #---> %Y-%m-%d euivale à %F
 cd $DIR

 for ITEM in `ls *.$EXT`
   do
   echo "O aquivo $ITEM , será modificado para ${DIA}-${ITEM} a partir de agora..." 

     mv $ITEM ${DIA}-${ITEM}
   done
