#!/bin/bash
docker build -t so2homelab.com:6000/library/band_app:latest --network=host .
docker push  so2homelab.com:6000/library/band_app:latest
