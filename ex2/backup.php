<?php
$pdo = new PDO('mysql:host=localhost;dbname=mailer', 'root', '');

$params = array(
    ':email' => $_POST['email'] ?? '',
    ':subject' => $_POST['subject'] ?? '',
    ':message' => $_POST['message'] ?? '',
);

if( !empty( $_POST['draft_identifier'] ) ){
    $sql = 'UPDATE mail SET email = :email, subject = :subject, message = :message WHERE id = :draft';
    $params[':draft'] = $_POST['draft_identifier'];
}else{
    $sql = 'INSERT INTO mail VALUES ( null, :email, :subject, :message )';
}

$stmt = $pdo->prepare( $sql );
$stmt->execute( $params );

echo json_encode( array(
    'status' => true,
    'draft_identifier' => $params[':draft'] ?? $pdo->lastInsertId(),
));
