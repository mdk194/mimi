#!/bin/sh
set -e

log_info() {
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[rules]: $1"
}

set -- board

for BOARD in "$@"; do
    log_info "Adding JLCPCB design rules: $BOARD"
    cp kicad/JLCPCB.kicad_dru "output/pcbs/$BOARD.kicad_dru"
    $DOCKER_CMD ./kicad/add_rules.py "output/pcbs/$BOARD.kicad_pcb"
done
