#!/bin/sh
set -e

log_info() {
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[plot]: $1"
}

plates="bottom_plate top_plate"

for plate in ${plates}
do
    echo ">>>>>> Processing $plate <<<<<<"
    $DOCKER_CMD kibot -b "output/pcbs/${plate}.kicad_pcb" -c kibot/default.kibot.yaml
done

echo ">>>>> Processing Board <<<<<<"
$DOCKER_CMD kibot -b "output/pcbs/board.kicad_pcb" -c kibot/boards.kibot.yaml

