<?php
$pdo = new PDO('mysql:host=localhost;dbname=mailer', 'root', '');

$sql = 'INSERT INTO mail VALUES ( null, :email, :subject, :message )';

$stmt = $pdo->prepare( $sql );
$stmt->execute( array(
    ':email' => $_POST['email'] ?? '',
    ':subject' => $_POST['subject'] ?? '',
    ':message' => $_POST['message'] ?? '',
));

echo json_encode( array(
    'status' => true
));
