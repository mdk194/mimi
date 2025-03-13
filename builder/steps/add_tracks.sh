#!/bin/sh
set -e

log_info() {
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[track]: $1"
}

set -- board

for BOARD in "$@"; do
    if [ -f "kicad/$BOARD.json" ]; then
        log_info "Adding hand-created tracks: $BOARD"
        $DOCKER_CMD ./kicad/import_tracks.py "output/pcbs/$BOARD.kicad_pcb" "kicad/$BOARD.json"
    fi
done
