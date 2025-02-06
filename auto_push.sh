#!/bin/bash

# Gehe in das Projektverzeichnis
cd /Desktop/Pacerechner

# Stages all changes (inklusive neuer Dateien)
git add .

# Commit mit aktuellem Datum und Uhrzeit
git commit -m "Automatisierter Commit am $(date)"

# Push auf den Remote-Branch (z.B. 'main')
git push origin main

