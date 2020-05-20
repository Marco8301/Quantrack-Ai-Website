<?php

try {
    $db = new PDO ("mysql:host=localhost; dbname=quantrackai; charset=utf8", "root", "root");
}

catch (PDOException $e) {
    echo "error : ".$e->getMessage();
}

?>