#!/usr/bin/env bash
# Reconstrói ../index.html a partir das partes em src/parts (envelope HTML incluído).
set -euo pipefail
cd "$(dirname "$0")"
python3 build.py
