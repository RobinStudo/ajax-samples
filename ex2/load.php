<?php
$pdo = new PDO('mysql:host=localhost;dbname=mailer', 'root', '');

$sql = 'SELECT * FROM mail WHERE id = :id';
$stmt = $pdo->prepare( $sql );
$stmt->execute( array(
    ':id' => $_GET['draft'],
));
$mail = $stmt->fetch();

echo json_encode( $mail );
