<?php
if (isset($_POST)) {
    $host = "localhost";
    $username = "root";
    $password = "root";
    $database = "guest_book"; //also added semi colon and what database name
    $connection = @mysqli_connect($host, $username, $password, $database);

    $name = mysqli_real_escape_string($connection, $_POST['Name']); //I've added $conn inside mysqli_real_escape_string expected 1st param
    $phone = mysqli_real_escape_string($connection, $_POST['tel']);

    $sql = "INSERT INTO clients (name, phone) VALUES ('$name', '$phone')";
    $query = mysqli_query($connection, $sql); // I think this will add data in your database.

    echo "<link rel='stylesheet' href='css/form.min.css'>";

    if (!$connection) { //I change this from mysql_query($sql)
        die('Ошибка: ' . mysqli_error());
    } else {
        echo $_POST['Name'] . ", Ваши данные были успешно загружены.<br> Менеджер свяжется с Вами в течение 5ти минут";

        mysqli_close($connection);
    }
}
