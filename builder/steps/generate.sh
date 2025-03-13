#!/bin/sh
set -e

log_info() {
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[generate]: $1"
}

if [ -z "${NOVUM_VERSION}" ]; then
    GIT_HASH=$(git rev-parse --short HEAD || true)
    GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD || true)
    NOVUM_VERSION="${GIT_BRANCH}-${GIT_HASH}"
    if [ -z "${NOVUM_VERSION}" ]; then
        NOVUM_VERSION=""
    fi
fi

log_info "Installing depedencies"
npm install

log_info "Genarating unrouted PCBs"
NOVUM_VERSION=$NOVUM_VERSION npm run generate
