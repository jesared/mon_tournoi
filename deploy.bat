@echo off
echo === Déploiement en cours ===
git add .
git commit -m "Update deployment %date%"
git push origin main
echo === Déploiement terminé ===
pause