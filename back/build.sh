#!/bin/bash
docker build -t so2homelab.com:6000/library/band_api:latest --network=host .
docker push  so2homelab.com:6000/library/band_api:latest
