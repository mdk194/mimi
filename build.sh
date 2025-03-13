#!/bin/sh
set -e

log_info() {
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "${TIMESTAMP}: $1"
}

if [ -f /.dockerenv ]; then
    export DOCKER_CMD=""
else
    IMAGE=mdk/ergo-builder:latest
    export DOCKER_CMD="docker run --rm -it --platform linux/amd64 -v $PWD:/kicad-project $IMAGE"
    # Build the builder if does not exist
    if [ -z "$(docker images -q $IMAGE 2> /dev/null)" ]; then
        log_info "Building the builder container"
        npm run build-builder
    fi
fi

export FREEROUTING_PATH="./freerouting/freerouting.jar"

if [ ! -f "${FREEROUTING_PATH}" ]; then
    log_info "'freerouting.jar' does not exist. Downloading..."
    wget -O freerouting/freerouting.jar https://github.com/freerouting/freerouting/releases/download/v2.0.1/freerouting-2.0.1.jar
fi

# Cleanup Freerouting log outpus
if [ -e freerouting/freerouting.log ]; then
    rm freerouting/freerouting.log
fi
if [ -e logs/freerouting.log ]; then
    rm logs/freerouting.log
fi

log_info "Starts building"

if [ -d "out" ]; then
    log_info "Removing the 'out' directory..."
    rm -r "out"
fi

./builder/steps/generate.sh
# ./builder/steps/add_design_rules.sh
./builder/steps/add_tracks.sh
./builder/steps/autoroute.sh
# ./builder/steps/plot_gerbers_and_images.sh

log_info "--- All Done ---"

