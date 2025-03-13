#!/bin/sh
set -e

log_info() {
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[autoroute]: $1"
}

mkdir -p "output/freeroute"

set -- board

for BOARD in "$@"; do
    log_info "Exporting the DSN: $BOARD"
    $DOCKER_CMD ./kicad/export_dsn.py -b "output/pcbs/$BOARD.kicad_pcb" -o "output/freeroute/$BOARD.dsn"

    log_info "Routing: $BOARD"
    java -jar "$FREEROUTING_PATH" -Dlog4j.configurationFile=file:./freerouting/log4j2.xml -da -dr ./freerouting/freerouting.rules --user-data-path ./freerouting -mp 100 -mt 1 -dct 0 -de "output/freeroute/$BOARD.dsn" -do "output/freeroute/$BOARD.ses"

    log_info "Importing the SES: $BOARD"
    $DOCKER_CMD ./kicad/import_ses.py -b "output/pcbs/$BOARD.kicad_pcb" -s "output/freeroute/$BOARD.ses" -o "output/pcbs/$BOARD.kicad_pcb"
done
