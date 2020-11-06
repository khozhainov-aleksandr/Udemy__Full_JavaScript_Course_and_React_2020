<?php
// Получаем JSON данные на PHP коде.
$_POST = json_decode(file_get_contents('php://input'), true);
echo var_dump($_POST);