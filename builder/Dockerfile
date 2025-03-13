FROM ghcr.io/inti-cmnb/kicad8_auto:latest

ARG RESOLUTION="1920x1080x24"
ARG XARGS=""

# Install general depedencies
RUN apt-get update \
    && apt-get -y --no-install-recommends install \
    nodejs\
    npm \
    openjdk-17-jre \
    wget \
    xvfb \
    libgl1-mesa-dri \
    zip \
    && rm -rf /var/lib/apt/lists/*

# Install freerouting
RUN wget --progress=dot:giga -O /freerouting.jar https://github.com/freerouting/freerouting/releases/download/v2.0.1/freerouting-2.0.1.jar

# Setup xvfb
COPY xvfb-startup.sh /
RUN sed -i 's/\r$//' /xvfb-startup.sh
ENV XVFB_RES="${RESOLUTION}"
ENV XVFB_ARGS="${XARGS}"
ENV FREEROUTING_PATH="/freerouting.jar"

WORKDIR /kicad-project
ENTRYPOINT ["/bin/bash", "/xvfb-startup.sh"]
