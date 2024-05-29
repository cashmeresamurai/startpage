# Verwende das offizielle nginx-Image als Basis
FROM nginx:alpine

# Kopiere alle Dateien aus dem aktuellen Verzeichnis in das Standardverzeichnis für Webseiten in nginx
COPY . /usr/share/nginx/html

# Der Container startet automatisch den nginx-Webserver
