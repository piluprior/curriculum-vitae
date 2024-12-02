<?php
    // chemin du fichier où enregistrer les données
    $fichierLog = 'logs_connexions.txt';

    // récupération des données
    $adresseIP = $_SERVER['REMOTE_ADDR']; // adresse IP
    $dateHeure = date('Y-m-d H:i:s');     // d<ate et heure au format AAAA-MM-JJ HH:mm:ss

    // format de la ligne de log
    $ligneLog = "Date: $dateHeure, IP: $adresseIP\n";

    // enregistrement dans le fichier
    file_put_contents($fichierLog, $ligneLog, FILE_APPEND);

    echo "Connexion enregistrée.";
?>